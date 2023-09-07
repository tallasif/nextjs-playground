import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    vus: 25, // <= Change QPS values here
    duration: '300s',
};
export default function () {
    http.get('http://${host}:${port}/'); // <= Change to your host port
    sleep(1);
}
