const db = require('../db/db')

exports.getCustomer =  async (request, response) => {
  try {
    const result = await db.pool.query("SELECT * FROM customers")
    return response.status(200).json(result.rows)
  } catch (error) {
    return response.status(500).json({message: `Get customers Error: ${error}`})
  }
}