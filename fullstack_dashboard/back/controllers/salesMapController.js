const db = require('../db/db')

exports.getSalesMap =  async (request, response) => {
  try {
    const result = await db.pool.query("SELECT * FROM sales_map")
    return response.status(200).json(result.rows)
  } catch (error) {
    return response.status(500).json({message: `Get sales_map Error: ${error}`})
  }
}