class urlApi{
    webDomain(){
        return 'http://localhost:3000'
    }
    backendDomain(){
        return 'http://127.0.0.1:8000'
    }
}
var instance = new urlApi();
export default instance;
