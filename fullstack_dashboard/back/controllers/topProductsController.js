const db = require('../db/db')

exports.getTopProducts =  async (request, response) => {
  try {
    const result = await db.pool.query("SELECT * FROM top_products")
    return response.status(200).json(result.rows)
  } catch (error) {
    return response.status(500).json({message: `Get top_products Error: ${error}`})
  }
}