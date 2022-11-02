import axios from "axios";

const list = () => axios.get("/tasks");

const create = payload => axios.post("/tasks", { task: payload });

const show = id => axios.get(`/tasks/${id}`);

const update = ({ id, payload, quiet = false }) => {
  const path = quiet ? `/tasks/${id}?quiet` : `/tasks/${id}`;
  return axios.put(path, {
    task: payload,
  });
};

const destroy = ({ id, quiet = false }) => {
  const path = quiet ? `/tasks/${id}?quiet` : `/tasks/${id}`;
  return axios.delete(path);
};
const tasksApi = {

  list,
  show,
  create,
  update,
  destroy
};

export default tasksApi;
