import { HttpParams } from '@angular/common/http';
export {httpBodyBuilder}

// httpBodyBuilder takes a json object and parses each key:value pair and adds these arguments 
// to the body variable.
function httpBodyBuilder(jsonObject:object):string {
    let body = new HttpParams();
    // Since strings are immutable, we need to overwrite the body variable each time
    // and we call toString() for it to ouput the formatted arguments.
        Object.keys(jsonObject).forEach(key=> {
        body=body.append(key,jsonObject[key]);
    });
    return body.toString();
}