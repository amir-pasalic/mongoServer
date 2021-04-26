import express from 'express';
import ctrl from '../controllers/courses.controller';

const router = express.Router();

router.route('/curses')
.get(ctrl.list)
.post(ctrl.create);

router.route('/curses/:id')
   .get(ctrl.read)
   .put(ctrl.update)
   .delete(ctrl.remove);

export default router;