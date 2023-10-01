  function prepareBundles(...classes) {
    const combinedMethods = {};
  
    for (const Class of classes) {
  
      const prototype = Class.prototype;
  
  
      for (const methodName of Object.getOwnPropertyNames(prototype)) {
  
        if (methodName !== 'constructor') {
  
          const method = prototype[methodName];
  
  
          combinedMethods[methodName] = method;
        }
      }
    }
    class CombinedClass {
      constructor() {
        for (const ClassConstructor of classes) {
            const instance = new ClassConstructor();
            
            Object.assign(this, instance);
          }
      }
    }
  
    Object.assign(CombinedClass.prototype, combinedMethods);
  
    return CombinedClass;
}

module.exports = {prepareBundles}