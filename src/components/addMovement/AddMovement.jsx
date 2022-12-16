import React, { useEffect, useState } from "react";
import { prismaDigitalApi } from "../../api/prismaDigitalApi";
import { hasEmptyFields } from "../../utils/Validation";
import { Button } from "../button";
import { Input, InputCheck } from "../input";
import { MessageError } from "../messageError";
import { Modal } from "../modal/Modal";

export const AddMovement = ({
  show,
  setShow = () => {},
  username = "",
  getList = () => {},
  description = false,
  id = "",
  setList,
}) => {
  const [data, setData] = useState("");
  const [check, setCheck] = useState("");
  const [error, setError] = useState(false);

  const onChangeCheck = ({ target }) => {
    const { name } = target;
    setCheck(name);
  };

  const onCangeValue = ({ target }) => {
    const { value, name } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    setData({
      ...data,
      type: check === "Ingreso" ? "1" : check === "Gasto" ? "2" : "",
    });
  }, [check]);

  useEffect(() => {
    if (description) {
      getMovement();
    }
  }, [description]);

  const getMovement = async () => {
    const { data: response } = await prismaDigitalApi.get(
      `/users/${username}/bills/${id}`
    );
    setData({
      ...response,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    if (hasEmptyFields(data, ["observation", "type", "value"]))
      return setError(true);
    const { type, value, observation } = data;

    const { data: resp } = await prismaDigitalApi.post(
      `/users/${username}/bills`,
      {
        type,
        value,
        observation,
      }
    );
    if (!!resp.id) {
      setData({
        type: "",
        value: "",
        observation: "",
      });

      setShow(!show);
      getList();
    }
  };

  const deleteMovement = async (e) => {
    e.preventDefault();
    const { data: response } = await prismaDigitalApi.delete(
      `/users/${username}/bills/${id}`
    );
    if (response) {
      setList(response);
      setShow(false);
    }
  };

  return (
    <Modal show={show}>
      <form className="w-full p-10 h-fit">
        <h2 className="text-purple font-bold my-6">
          {description ? "Ver Movimiento" : "Registro de Movimiento"}
        </h2>
        {description ? new Date(data.date_bill).toLocaleString() : ""}
        <p className="mt-2">Descripción</p>
        <textarea
          className="border w-full border-gray-400 h-20 outline-none p-4"
          onChange={onCangeValue}
          name="observation"
          value={data.observation}
        />
        {error && !data.observation ? <MessageError /> : ""}
        <p>Tipo de Movimiento</p>
        <div className="flex">
          <InputCheck
            label="Ingreso"
            onChange={onChangeCheck}
            checked={data.type === "1" ? true : false}
          />
          <InputCheck
            label="Gasto"
            onChange={onChangeCheck}
            checked={data.type === "2" ? true : false}
          />
        </div>
        {error && !data.type ? <MessageError /> : ""}
        <Input
          label="Valor"
          onChange={onCangeValue}
          name="value"
          type="number"
          value={data.value}
          error={error && !data.value}
          messageError='la información del campo es requerida'
        />
        <div className="flex mt-10 justify-around">
          <Button
            text={description ? "Eliminar" : "Registrar"}
            // onClick={register}
            onClick={description ? deleteMovement : register}
          />
          <Button
            text={"cancelar"}
            classButton="text-purple font-bold"
            onClick={() => setShow(!show)}
          />
        </div>
      </form>
    </Modal>
  );
};
