import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { prismaDigitalApi } from "../api/prismaDigitalApi";
import { AddMovement } from "../components/addMovement";
import { Header } from "../components/header";
import { separator } from "../utils/Text";

export const Movements = () => {
  const { username } = useParams();

  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [cut, setCut] = useState(true);
  const [description, setDescription] = useState({});

  useEffect(() => {
    getList();
  }, [username]);

  const getList = async () => {
    const { data } = await prismaDigitalApi.get(`/users/${username}/bills`);
    setList(data);
  };

  const showList = (list, cut) => {
    if (cut) return list.slice(0, 5);
    return list;
  };

  const modalDescription = (id) => {
    setCut(true);
    setShow(true);
    setDescription({
      description: true,
      id,
    });
  };

  const addMovements = () => {
    setCut(true);
    setShow(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col relative">
      <AddMovement
        show={show}
        setShow={setShow}
        username={username}
        getList={getList}
        description={description.description}
        id={description.id}
        setList={setList}
      />
      <div className="w-full">
        <Header />
      </div>
      <div className="w-11/12 sm:w-6/12 lg:w-4/12 mx-auto m-6 md:mt-6 px-4">
        <h3 className="font-bold mb-3">Movimientos</h3>
        {showList(list, cut)?.map((item, index) => (
          <div
            className="flex justify-between my-2 hover:bg-[rgba(183,180,180,0.4)] cursor-pointer"
            key={index}
            onClick={() => modalDescription(item.id)}
          >
            <div>
              <p>{item.date_bill.slice(0, 10)}</p>
              <p>{item.observation}</p>
            </div>
            <p className="font-bold">{`$ ${
              item.type === "2" ? "-" : ""
            } ${separator(item.value)}`}</p>
          </div>
        ))}
        <div className="flex w-full justify-between">
          <button
            className="bg-gray-400 text-black rounded-none self-center mx-auto md:ml-40 py-0 "
            onClick={() => setCut(!cut)}
          >
            {`ver ${cut ? "mas" : "menos"}`}
          </button>
          <button
            className="w-16 h-16 font-bold bg-purple hover:bg-indigo-500 text-white rounded-full "
            onClick={addMovements}
          >
            <i className="fa-solid fa-plus text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
