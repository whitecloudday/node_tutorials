const router = require('express').Router()
const targetRealityController = require('../controllers/targetRealityController')

/**
 * @swagger
 * /target_reality:
 *   get:
 *     summary: 월별 목표 대비 실적 데이터 조회
 *     tags: [Target Reality]
 *     responses:
 *       200:
 *         description: 목표/실적 목록 반환
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
 *                   reality:
 *                     type: integer
 *                   target:
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
router.get('/target_reality', targetRealityController.getTargetReality)

module.exports = router
