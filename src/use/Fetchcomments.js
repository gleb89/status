import { api } from 'boot/axios'

async function GetListComments(pk) {

  const commenstList = await api.get(`api/comments/status/${pk}`)
console.log(commenstList.data);

  return { commenstList: commenstList.data }
};

async function GetOneComment(pk) {

  const comment = await api.get(`api/comments/retrieve/${pk}`)

console.log(comment);
  return { comment: comment.data }
}

export { GetListComments, GetOneComment }
