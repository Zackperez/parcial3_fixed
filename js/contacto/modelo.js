import config from '../supabase/keys.js'

export const modelo = {
    datos: [],
  
    agregarDato: function(nuevoDato) {
      return axios({
        method: "POST",
        url: "https://mmphzayxvvhdtrtcvjsq.supabase.co/rest/v1/tickets", 
        headers: config.headers,
        data: nuevoDato,
      })
        .then(res =>
          console.log(res))
    },

  };