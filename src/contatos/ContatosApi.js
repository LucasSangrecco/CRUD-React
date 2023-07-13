const URL = 'https://user-api.tarleylana.repl.co/users'

export async function findAll(){
  const options = {
    method: 'GET',
    headers: {
      Authorization: 12114651
    }
  }

  const httpResponse = await fetch(URL, options)

  if (httpResponse.ok){
    const responseBody = await httpResponse.json()
    return responseBody.data
  }else {
    console.log('Erro ao executar a API', httpResponse.statustext)
    return[]
  }
}

export async function removeById(id){
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: 12114651
    }
  }

 const httpResponse = await fetch(URL + '/' + id, options)

  if (httpResponse.ok){
    const responseBody = await httpResponse.json()
    return responseBody.data
  }else {
    console.log('Erro ao excutar a API', httpResponse.statusText)
    return null
  }
}

export async function insert(cargo, formacao, setor, endereco){
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 12114651
    },
    body: JSON.stringify({cargo, formacao, setor, endereco})
  }

  const httpResponse = await fetch(URL, options)

  if (httpResponse.ok){
    const responseBody = await httpResponse.json()
    return responseBody.data
  }else {
    console.log('Erro ao excutar a API', httpResponse.statusText)
    return null
  }
}

export async function findById(id) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 12114651
    }
  }
  
  const httpResponse = await fetch(`${URL}/${id}`, options)

  if (httpResponse.ok){
    const responseBody = await httpResponse.json()
    return responseBody.data
  }else {
    console.log('Erro ao excutar a API', httpResponse.statusText)
    return []
  }
}



