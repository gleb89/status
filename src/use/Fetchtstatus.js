import { api } from 'boot/axios'

async function GetListStatus() {

  const statusList = await api.get('api/status/')


  return { statusList: statusList.data }
};

async function GetOneStatus(pk) {

  const statusData = await api.get(`api/status/retrieve/${pk}`)


  return { status: statusData.data }
}

export { GetListStatus, GetOneStatus }


