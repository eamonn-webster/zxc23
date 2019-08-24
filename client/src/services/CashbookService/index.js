import http from '../../config/http';
import axios from "axios";

class CashbookService {
  static index() {
    return http.get('/cashbooks')
      .then(response => response.data);
  }

  static put(id, title, opening_value) {
    return http.put('/cashbooks/' + id, {
      cashbook: {
        title,
        opening_value
      }
    });
  }

  static post(title, opening_value) {
    return http.post('/cashbooks', {
      cashbook: {
        title,
        opening_value
      }
    });
  }

  static delete(id) {
    return http.delete('/cashbooks/' + id);
  }
}

export default CashbookService;
