import { NextFunction, Request, Response, Router } from 'express';
import { getContactRepository, Contact } from './model';

export const router: Router = Router();

router.get('/contact', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const repository = await getContactRepository();
    const allContacts = await repository.find();
    res.send(allContacts);
  }
  catch (err) {
    return next(err);
  }
});

router.get('/contact/:id', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const repository = await getContactRepository();
    const contact = await repository.find({ id: req.params.id });
    res.send(contact);
  }
  catch (err) {
    return next(err);
  }
});

router.post('/contact', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const repository = await getContactRepository();
    const contact = new Contact();
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.twitter = req.body.twitter;

    const result = await repository.save(contact);
    res.send(result);
  }
  catch (err) {
    return next(err);
  }
});

router.patch('/contact/:id', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const repository = await getContactRepository();
    const contact = await repository.findOne({ id: req.params.id });
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.twitter = req.body.twitter;

    const result = await repository.save(contact);
    res.send(result);
  }
  catch (err) {
    return next(err);
  }
});

router.delete('/contact/:id', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const repository = await getContactRepository();
    await repository.delete({ id: req.params.id });
    res.send('OK');
  }
  catch (err) {
    return next(err);
  }
});