const router = require('express').Router() // express에서 제공하는 라우트 메서드 저장
const visitorsController = require('../controllers/visitorsController')

/**
 * @swagger
 * /visitors:
 *   get:
 *     summary: 월별 방문자 데이터 조회
 *     tags: [Visitors]
 *     responses:
 *       200:
 *         description: 방문자 목록 반환
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
 *                   new_customer:
 *                     type: integer
 *                   loyal_customer:
 *                     type: integer
 *                   unique_customer:
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
router.get('/visitors', visitorsController.getVisitors)

module.exports = router
