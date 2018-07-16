//引用supertest
const request = require('supertest');
//呼叫網址
const host_url = 'http://localhost:56432/';

describe('測試Sample Rest API', () => {

    //測試訊息
    const msg = 'test';
   
    it('測試demo_message', function(done) {
        const container_url = host_url + 'api/Demo/demo_message?message='+msg;
        const container = request(container_url);
        container
            .get('')
            .expect(200)
            .expect(function(res){
                var body = res.body;
                //console.log(res)
                if(!('Result' in body))   throw new Error("Missing Result key")
                if(!('data' in body))     throw new Error("Missing data key")
                if(!('Message' in body))  throw new Error("Missing Message key")
                if(body.Result != 1 )     throw new Error("Message Error, 沒有回傳錯誤")
                if(body.Message.indexOf(msg) == -1 ) throw new Error("Message Error, 輸入資料與回傳資料不相符")
            })
            .end(done)
    });

    it('測試demo_data', function(done) {
        const container_url = host_url + 'api/Demo/demo_data?message='+msg;
        const container = request(container_url);
        container
          .post('')
          .send({
            'id': 1,
            'name': 'Mike'
          })
          .expect(200)
          .expect(function(res){
              var body = res.body;
              //console.log(res)
              if(!('Result' in body))   throw new Error("Missing Result key")
              if(!('data' in body))     throw new Error("Missing data key")
              if(!('Message' in body))  throw new Error("Missing Message key")
              if(body.Result != 1 )     throw new Error("Message Error, 沒有回傳錯誤")
              if(body.Message.indexOf(msg) == -1 ) throw new Error("Message Error, 輸入資料與回傳資料不相符")
          })
          .end(done)
      });

    it('測試demo_error', (done) =>{
        
        const container_url = host_url + 'api/Demo/demo_error?message='+msg;
        const container = request(container_url);
        container
        .get('')
        .expect(200)
        .expect(function(res){
            var body = res.body;
            if(!('Result' in body))   throw new Error("Missing Result key")         
            if(!('Message' in body))  throw new Error("Missing Message key")

            if(body.Result != -1 ) throw new Error("Message Error, 沒有回傳錯誤")
        })
        .end(done)
    })
    .timeout(50000); //錯誤會比較久;

    it('測試demo_list_error_log', (done) =>{
        
        const container_url = host_url + 'api/Demo/demo_list_error_log';
        const container = request(container_url);
        container
        .get('')
        .expect(200)
        .expect(function(res){
            var body = res.body;
            if(!('Result' in body))   throw new Error("Missing Result key")         
            if(!('Message' in body))  throw new Error("Missing Message key")
            if(body.Result != 1 )     throw new Error("Message Error, 沒有回傳錯誤")
        })
        .end(done)
    })
    .timeout(50000); //錯誤會比較久;

    it('測試RedisGet', (done) =>{
        
        const container_url = host_url + 'api/Demo/RedisGet';
        const container = request(container_url);
        container
        .get('')
        .expect(200)
        .expect(function(res){
            var body = res.body;
            if(!('Result' in body))   throw new Error("Missing Result key")         
            if(!('Message' in body))  throw new Error("Missing Message key")
            if(body.Result != 1 )     throw new Error("Message Error, 沒有回傳錯誤")
        })
        .end(done)
    });

    it('測試沒有存在的API連結', (done) =>{
        
        const container_url = host_url + 'api/Demo/RedisNoGet';
        const container = request(container_url);
        container
        .get('')
        .expect(200)
        .expect(function(res){
            var body = res.body;
            if(!('Result' in body))   throw new Error("Missing Result key")         
            if(!('Message' in body))  throw new Error("Missing Message key")
            if(body.Result != 1 )     throw new Error("Message Error, 沒有回傳錯誤")
        })
        .end(done)
    });
    
});
  
