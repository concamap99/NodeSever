const {validationResult} = require('express-validator');
<<<<<<< Updated upstream
const {LopHocSchema} = require('../model/Schema');
=======
const {LopHocSchema} = require('../model/index.schema');
>>>>>>> Stashed changes
module.exports = {
    admin_get_class_list: async function (req, res) {
        let perPage = 10;
        let page = req.query.page || 1;
        await LopHocSchema
            .find({})
            .populate('nguoi_tao_id', ['_id', 'ho', 'ten'])
            .populate({
                path: 'ds_sinh_vien',
                model: 'SinhVien',
                select: ['_id', 'ho', 'ten']
            })
            .populate({
                path: 'ds_bai_thi',
                model: 'BaiThi',
                select: ['_id', 'tieu_de', 'trang_thai']
            })
            .populate({
                path: 'ds_bai_tap',
                model: 'BaiTap',
                select: ['_id', 'tieu_de', 'trang_thai']
            })
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec((err, data) => {
                LopHocSchema.countDocuments(
                (err, count) => {
<<<<<<< Updated upstream
                    if (err) 
                        res
                            .status(400)
                            .json({'success': false, 'errors': err})
                    res
                        .status(200)
                        .json({
                            success: true,
=======
                    err ? res.status(400).json({'success': false, 'errors': err})
                        : res.status(200).json({
                            success: true,
                            count,
>>>>>>> Stashed changes
                            data,
                            current: page,
                            pages: Math.ceil(count / perPage)
                        });
                    }
                );
            });
    },
    admin_get_class_detail: async function (req, res) {
        await LopHocSchema
            .findOne({_id: req.params.id})
            .populate('nguoi_tao_id', ['_id', 'ho', 'ten'])
            .populate({
                path: 'ds_sinh_vien',
                model: 'SinhVien',
                select: ['_id', 'ho', 'ten']
            })
            .populate({
                path: 'ds_bai_thi',
                model: 'BaiThi',
                select: ['_id', 'tieu_de', 'trang_thai']
            })
            .populate({
                path: 'ds_bai_tap',
                model: 'BaiTap',
                select: ['_id', 'tieu_de', 'trang_thai']
            })
            .exec((err, result) => {
                err ? res.status(400).json({'success': false, 'errors': err}) : res.status(200).json({'success': true, 'data': result})
            })
    }
}