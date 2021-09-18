import User, { IUser } from './../models/user';
import { Router, Request, Response } from 'express';
import url from 'url';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  console.log('User route working..!!');
  try {
    const parsedQuery = url.parse(req.url, true);
    const firstname = parsedQuery.query.firstname;
    const username = parsedQuery.query.username;
    if (firstname && username) {
      // firstname = firstname.toString();
      User.find({
        username: username,
        firstname: firstname,
        // lastname: 'sujay',
      })
        .lean()
        .exec(function (err, docs) {
          console.log(docs);
          res.json(docs);
        });
    }

    // Build user object based on IUser
  } catch (err) {
    res.json({ err });
  }
});
router.get('/create', async (req: Request, res: Response) => {
  console.log('User route working..!!');
  try {
    const body = req.body;
    User.create(
      { firstname: 'sujay nandha kumar', username: 'Yes sujay' },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log(docs);
          res.json(docs);
        }
      }
    );
    // Build user object based on IUser
  } catch (err) {
    res.json({ err });
  }
});
router.get('/update', async (req: Request, res: Response) => {
  console.log('User route working..!!');
  try {
    const body = req.body;
    User.updateOne(
      { firstname: 'sujay nandha kumar' },
      {
        $set: {
          username: 'HElo sujay',
        },
      }
    )
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => {
        console.log(err);
      });
    // Build user object based on IUser
  } catch (err) {
    res.json({ err });
  }
});
router.get('/delete', async (req: Request, res: Response) => {
  try {
    const body = req.body;
    User.deleteOne({ firstname: 'sujay nandha kumar' })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => {
        console.log(err);
      });
    // Build user object based on IUser
  } catch (err) {
    res.json({ err });
  }
});

export default router;
