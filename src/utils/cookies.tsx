declare function unescape(s: string): string;
declare function escape(s: string): string;

class CookiesFunction {
    // tslint:disable-next-line:variable-name
    public getCookie(c_name: string) {
        if (document.cookie.length > 0) {
            // tslint:disable-next-line:variable-name
            let c_start = document.cookie.indexOf(c_name + '=');
            if (c_start !== -1) {
                c_start = c_start + c_name.length + 1;
                // tslint:disable-next-line:variable-name
                let c_end = document.cookie.indexOf(';', c_start)
                // tslint:disable-next-line:curly
                if (c_end === -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return '';
    }

    // tslint:disable-next-line:variable-name
    public setCookie(c_name: string, value: any, expiredays: number) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + '=' + escape(value) +
            ((expiredays == null) ? '' : ';expires=' + exdate.toTimeString());
    }
}

export default CookiesFunction;