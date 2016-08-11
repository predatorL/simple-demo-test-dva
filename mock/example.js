'use strict';
const qs = require('qs');

module.exports = {

  'GET /api/example': function (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: ['foo', 'bar'],
      });
    }, 500);
  },
  'POST /api/area': function (req, res) {
    let [_body,query] = [qs.parse(req.body),qs.parse(req.query)]

    let Data2 = [{"age":"115"},{"age":"114"},{"age":"113"},{"age":"112"},{"age":"111"},{"age":"110"},{"age":"19"},{"age":"18"},{"age":"17"},{"age":"16"},{"age":"15"},{"age":"14"},{"age":"13"},{"age":"12"},{"age":"11"}]

    let _data = Data2.splice(0,parseInt(_body.area || 14))

    setTimeout(function () {
      res.json({
        success: true,
        data: _data,
        page: {
          total: 3,
          current:1,
        }
      });
    }, 500);
  },
};
