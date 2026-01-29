const router = require('express').Router() // express에서 제공하는 라우트 메서드 저장
const revenueController = require('../controllers/revenueController')

/**
 * @swagger
 * /revenue:
 *   get:
 *     summary: 요일별 매출 데이터 조회
 *     tags: [Revenue]
 *     responses:
 *       200:
 *         description: 매출 목록 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   day:
 *                     type: string
 *                   online:
 *                     type: integer
 *                   offline:
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
router.get('/revenue', revenueController.getRevenue)

module.exports = router
