const db = require('../db/db')

exports.getRevenue =  async (request, response) => {
  try {
    const result = await db.pool.query("SELECT * FROM revenue")
    return response.status(200).json(result.rows)
  } catch (error) {
    return response.status(500).json({message: `Get revenue Error: ${error}`})
  }
}