import { Router } from 'express';

const router = Router({
  caseSensitive: true,
  mergeParams: true,
});

router.get('/');

router.post('/');

router.put('/');

router.patch('/');

router.delete('/');

export default router;