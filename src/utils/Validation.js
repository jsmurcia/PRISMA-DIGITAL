export const isValidEmail = email => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email.trim())
  }

  export const hasEmptyFields = (data, keys) => {
    const errors = []
    if (keys) {
      keys.forEach(key => {
        if (!data[key]) errors.push(key)
      })
    }
  
    return !!errors.length
  }
  