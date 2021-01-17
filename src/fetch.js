import axios from "axios";
import { notification } from "antd";

const server = "https://nazarov-kanban-server.herokuapp.com";

function httpMethod(method, url, data) {
  return axios({
    method,
    url: server + url,
    data,
  })
    .then((res) => {
      // notification.success({
      //     message: `Success request ${res.status} ${res.statusText}`,
      //     duration: 2,
      //     placement: 'bottomRight',
      // });
      return res;
    })
    .catch((error) => {
      notification.error({
        message: "An error has occurred",
        duration: 2,
        placement: "bottomRight",
      });
      return error;
    });
}

export function get(url, data) {
  return httpMethod("get", url, data);
}

export function post(url, data, type) {
  return httpMethod("post", url, data, type);
}

export function patch(url, data, type) {
  return httpMethod("patch", url, data, type);
}

export function del(url, data) {
  return httpMethod("delete", url, data);
}
