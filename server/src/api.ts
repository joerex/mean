import {Content} from './models/content';

export class Api {
  content;

  constructor(app) {

    this.content = new Content();

    app.get('/api', (req, res) => {
      this.content.getContent({}, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
      }, 10);
    });

    app.get('/api/borough/:borough', (req, res) => {
      this.content.getContent({
        borough: new RegExp(req.params.borough, 'i')
      }, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
      });
    });

    app.get('/api/:id', (req, res) => {
      this.content.getContent({
        _id: req.params.id
      }, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
      });
    });

    app.post('/api', (req, res) => {
      this.content.insertContent(req.body, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
      });
    });

    app.put('/api', (req, res) => {
      this.content.updateContent(req.body, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
      });
    });

    app.delete('/api/:id', (req, res) => {
      this.content.removeContent({_id: req.params.id}, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
      });
    });
  }
}