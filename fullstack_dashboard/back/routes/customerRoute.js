const router = require('express').Router()
const customerController = require('../controllers/customerController')

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: 월별 고객 데이터 조회
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: 고객 목록 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   month:
 *                     type: string
 *                   last_month:
 *                     type: integer
 *                   this_month:
 *                     type: integer
 *                   create_date:
 *                     type: string
 *                     format: date-time
 *                   update_date:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: 서버 에러
 */
router.get('/customers', customerController.getCustomer)

module.exports = router
