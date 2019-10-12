
class SAK {
    SAK() {

    }

    objectHasFalseValues(object) {
        if (!object && object != 0) {
            return true;
        }
        else if (typeof object == 'object') {
            
            if(!Object.keys(object).length) return true;
            
            for (let key in object) {
                if (object.hasOwnProperty(key)) {
                    if (typeof object[key] == 'object' && object[key] != null) {
                        if (this.objectHasFalseValues(object[key])) {
                            return true;
                        }
                    }
                    else {
                        if (!object[key] && object[key] != 0) {
                            return true;
                        }
                    }
                }
                else {
                    return true;
                }
            }
        }
        return false;
    }
}