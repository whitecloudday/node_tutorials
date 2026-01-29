const db = require('../db/db')

exports.getVolumeServices =  async (request, response) => {
  try {
    const result = await db.pool.query("SELECT * FROM volume_services")
    return response.status(200).json(result.rows)
  } catch (error) {
    return response.status(500).json({message: `Get volume_services Error: ${error}`}) // 데이터를 json 형식으로 변환
  }
}