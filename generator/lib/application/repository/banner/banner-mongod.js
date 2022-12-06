const { BannerModel } = require("../../../domain/mongod/models");
const Model = BannerModel;

async function selectWithPagination(condition, { limit, skip }) {
  if (!limit || !skip) return [];

  return await Model.aggregate([
    { $match: condition },
    { $limit: Number(limit) },
    { $skip: Number(skip) },
    { $project: { __v: 0 } },
    { $sort: { created_time: -1 } },
  ]);
}

async function selectManyByCondition(condition) {
  return await Model.find(condition).select({ __v: 0 }).sort({ created_time: -1 });
}

async function selectOneByCondition(condition) {
  return await Model.findOne(condition);
}

async function selectById(id) {
  return await Model.findById(id);
}

async function create(data) {
  return await Model.create(data);
}

async function updateOneByCondition(condition, updateData) {
  return await Model.updateOne(condition, updateData);
}

async function updateManyByCondition(condition, updateData) {
  return await Model.updateMany(condition, updateData);
}

async function updateById(id, updateData) {
  return await Model.findByIdAndUpdate(id, updateData);
}

async function removeOneByCondition(condition) {
  return await Model.deleteOne(condition);
}

async function removeManyByCondition(condition) {
  return await Model.deleteMany(condition);
}

async function removeById(id, updateData) {
  return await Model.findByIdAndRemove(id, updateData);
}

module.exports = {
  selectManyByCondition,
  selectOneByCondition,
  selectWithPagination,
  selectById,
  updateOneByCondition,
  updateManyByCondition,
  updateById,
  removeOneByCondition,
  removeManyByCondition,
  removeById,
  create,
};
