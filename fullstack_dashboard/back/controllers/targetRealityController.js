const db = require('../db/db')

exports.getTargetReality =  async (request, response) => {
  try {
    const result = await db.pool.query("SELECT * FROM target_reality")
    return response.status(200).json(result.rows)
  } catch (error) {
    return response.status(500).json({message: `Get target_reality Error: ${error}`})
  }
}