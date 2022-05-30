import fetch from 'node-fetch'

async function getData() {
  const originData = await fetch('http://localhost:3000')
  const result = await originData.json()
  return result
}

const result = await getData()
console.log(result)