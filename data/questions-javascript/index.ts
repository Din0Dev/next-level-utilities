import QuestionsJavascriptDataModel from "models/questions-javascript";

export const QuestionsJavascriptData: QuestionsJavascriptDataModel[] = [
  {
    title: "Hoisted",
    question: "Output là gì?",
    codeQuestion: `
      function sayHi() {
        console.log(name);
        console.log(age);
        var name = "Lydia";
        let age = 21;
      }
      
      `,
    select: [
      "Lydia và undefined",
      "Lydia và ReferenceError",
      "ReferenceError và 21",
      "undefined và ReferenceError",
    ],
    result: `
    Đáp án: D

    Trong hàm chúng ta đã khai báo biến name với var. Điều đó có nghĩa là biến này sẽ được hoisted (một vùng nhớ sẽ được set up khi biến được khởi tạo) với giá trị mặc định là undefined, cho tới khi chúng ta thực sự định nghĩa biến đó. Trong hàm này, chúng ta chưa hề định nghĩa biến name tại dòng mà ta log ra, vậy nên giá trị mặc định của nó vẫn là undefined.

    Các biến được khai báo với keyword let (và const) cũng được hoisted nhưng không giống như var, chúng không được khởi tạo. Chúng ta sẽ không thể truy cập chúng cho tới khi chúng ta khai báo (khởi tạo) chúng. Người ta gọi đó là "temporal dead zone". Khi ta truy cập đến một giá trị trước khi chúng được khai báo, JavaScript sẽ throws một ReferenceError.
    `,
    tags: "question1, question",
  },
  {
    title: "setTimeout callback",
    question: "Output là gì?",
    codeQuestion: `
      for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
      
      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
      
      `,
    select: ["0 1 2 and 0 1 2", "0 1 2 and 3 3 3", "3 3 3 and 0 1 2"],
    result: `
    Đáp án: C
    Bởi vì event queue trong JavaScript, hàm setTimeout callback sẽ được gọi sau khi vòng lặp được thực hiện. Bời vì biến i trong vòng lặp đầu tiên được khai báo với từ khóa var, nên nó sẽ là một biến global. Trong suốt vòng lặp, mỗi lần chúng ta tăng giá trị của i lên 1, sử dụng phép toán ++. Cho tới khi callback setTimeout được gọi, giá trị của i đã trở thành 3 rồi.
    
    Trong vòng lặp thứ 2, biến i được khai báo với từ khóa let, có nghĩa nó là một biến block-scoped (block là những gì được viết bên trong cặp ngoặc { }). Tại mỗi vòng lặp, i sẽ là một biến mới có một giá trị mới, và giá trị đó có scope là bên trong vòng lặp mà thôi.    `,
    tags: "question2, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      let c = { greeting: "Hey!" };
      let d;
      
      d = c;
      c.greeting = "Hello";
      console.log(d.greeting);
      `,
    select: ["Hello", "Hey", "undefined", "ReferenceError", "TypeError"],
    result: `
    Đáp án: A
    Trong JavaScript, tất cả các object sẽ được tham chiếu khi chúng được gán _bằng_wwwww một giá trị khác.
    
    Đầu tiên, giá trị c có giá trị là một object. Sau đó, chúng ta gán d tham chiếu tới object mà c trỏ tới.
    
    Khi ta thay đổi giá trị của object, tất cả các biến tham chiếu cũng đều thay đổi giá trị theo.
    `,
    tags: "question3, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      let a = 3;
      let b = new Number(3);
      let c = 3;
      
      console.log(a == b);
      console.log(a === b);
      console.log(b === c);
      `,
    select: [
      "true false true",
      "false false true",
      "true false false",
      "false true true",
    ],
    result: `
    Đáp án: C
    new Number() là một hàm built-in constructor. Mặc dù nó trông có vẻ giống như là một số, nhưng không phải: nó thực sự là một object với hàng tá những thông số khác nữa.

    Khi ta sử dụng phép so sánh ==, nó đơn thuần chỉ kiểm tra xem 2 biến có giá trị giống nhau. Chúng đều có giá trị là 3, vậy nên phép toán đầu trả về true.

    Tuy nhiên khi sử dụng phép so sánh ===, cả giá trị và kiểu đều phải giống nhau. Rõ ràng: new Number() không phải là một số, nó là một object. Cả 2 phép toán sau đều trả về false.
    `,
    tags: "question4, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      class Chameleon {
        static colorChange(newColor) {
          this.newColor = newColor;
          return this.newColor;
        }
      
        constructor({ newColor = "green" } = {}) {
          this.newColor = newColor;
        }
      }
      
      const freddie = new Chameleon({ newColor: "purple" });
      freddie.colorChange("orange");
      `,
    select: ["orange", "purple", "green", "TypeError"],
    result: `
    Đáp án: D
    
    Hàm colorChange là một hàm static (hàm tĩnh). Hàm static được thiết kế để chỉ để tồn tại ở mức class, và không thể truyền cho bất cứ instance con nào. Vì freddie là một instance con, hàm static này sẽ không được truyền xuống, và do đó không thể gọi được tại freddie instance: nó sẽ throw ra một TypeError.    `,
    tags: "question5, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      let greeting;
      greetign = {}; // Lỗi đánh máy!
      console.log(greetign);
      `,
    select: ["{}", "ReferenceError: greetign is not defined", "undefined"],
    result: `
    Đáp án: A
    Nó sẽ log ra object greetign, bởi vì chúng ta vừa khởi tạo một global object! Khi chúng ta đánh máy nhầm greeting thành greetign, trình thông dịch của JS sẽ coi nó như là global.greetign = {} (hay window.greetign = {} nếu chạy trên browser).

    Để tránh điều này chúng ta có thể sử dụng "use strict". Nó sẽ đảm bảo rẳng các biến đều phải được khai báo trước khi sử dụng.
    `,
    tags: "question6, question",
  },
  {
    title: "Gán giá trị",
    question: "Điều gì sẽ xảy ra khi chúng ta làm thế này?",
    codeQuestion: `
      function bark() {
        console.log("Woof!");
      }
      
      bark.animal = "dog";
      `,
    select: ["Hoàn toàn không có vấn đề gì!", "SyntaxError. Bạn không thể thêm thuộc tính theo cách này.", "undefined", 'ReferenceError'],
    result: `
    Đáp án: A
    Điều này là có thể với Javascript, bởi vì function cũng chỉ là object mà thôi! (Mọi primitive types đều là object)
    
    Function là một object đặc biệt. Phần code mà bạn viết không phải là function thực tế đâu. Function ở đây chính là một object với các thuộc tính. Và các thuộc tính này có thể gọi được.
    `,
    tags: "question7, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const lydia = new Person("Lydia", "Hallie");
    const sarah = Person("Sarah", "Smith");
    
    console.log(lydia);
    console.log(sarah);
      `,
    select: [`Person {firstName: "Lydia", lastName: "Hallie"} và undefined`, `Person {firstName: "Lydia", lastName: "Hallie"} và Person {firstName: "Sarah", lastName: "Smith"}`, `Person {firstName: "Lydia", lastName: "Hallie"} và {}`, `Person {firstName: "Lydia", lastName: "Hallie"} và ReferenceError`],
    result: `
    Đáp án: A
    Với sarah, chúng ta khai báo mà không có từ khóa new. Khi sử dụng new, nó sẽ trỏ đến một object mới mà ta vừa tạo ra. Tuy nhiên nếu ta không dùng new thì nó sẽ trỏ tới global object!
    
    Chúng ta cho rằng this.firstName là "Sarah" và this.lastName là "Smith". Tuy nhiên sự thực là chúng ta đã định nghĩa global.firstName = 'Sarah' và global.lastName = 'Smith'. Bản thân biến sarah vẫn là undefined.
    `,
    tags: "question8, question",
  },
  {
    title: "Gán giá trị",
    question: " 3 giai đoạn của event propagation là gì?",
    codeQuestion: `
    `,
    select: [`Target > Capturing > Bubbling`, `Bubbling > Target > Capturing`, `Target > Bubbling > Capturing`, `Capturing > Target > Bubbling`],
    result: `
    Đáp án: D
    Trong capturing phase, event được truyền từ các phần tử cha cho tới phần tử target. Sau khi tới được phần tử target thì bubbling sẽ bắt đầu
    `,
    tags: "question9, question",
  },
  {
    title: "Gán giá trị",
    question: "Tất cả các object đều có prototypes",
    codeQuestion: `
    `,
    select: [`đúng`, `Bubbling > Target > Capturing`, `sai`],
    result: `
    Đáp án: B
    Tất cả các object đều có prototypes, ngoại trừ base object. Object base có thể truy cập đến vài methods và properties, ví dụ như .toString. Đó là lý do tại sao chúng ta có thể sử dụng được các built-in methods trong JavaScript! Tất cả các phương thức đó đều có trong prototype. Mặc dù JavaScript không thể tìm thấy chúng trong object một cách trực tiếp, nó sẽ được truyền xuống thông qua prototype chain và xuống tới object, tại đây chúng ta có thể truy cập được nó.
    `,
    tags: "question10, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      function sum(a, b) {
        return a + b;
      }
      
      sum(1, "2");
    `,
    select: [`NaN`, `TypeError`, `"12"`, '3'],
    result: `
    Đáp án: C
    JavaScript là một ngôn ngữ dynamically typed: chúng ta không khai báo kiểu dữ liệu khi khai báo biến. Giá trị có thể bị tự động convert sang một kiểu dữ liệu khác mà ta không hề hay biết, điều này được gọi là implicit type coercion. Coercion có nghĩa là convert từ kiểu này sang kiểu khác.
    
    Trong ví dụ này, JavaScript sẽ convert số 1 sang dạng string. Mỗi khi ta cộng một số (1) với một string ('2'), số sẽ luôn được xem như là một string. Kết quả sẽ là một phép nối chuỗi giống như "Hello" + "World", vậy nên "1" + "2" sẽ trả về là "12".
    `,
    tags: "question11, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      let number = 0;
      console.log(number++);
      console.log(++number);
      console.log(number);
    `,
    select: [`1 1 2`, `1 2 2`, `0 2 2`, '0 1 2'],
    result: `
      Đáp án: C
      Khi phép toán ++ nằm ở đằng sau (postfix):
      
      Trả về giá trị (trả về 0)
      Tăng giá trị lên (number giờ là 1)
      Khi phép toán ++ nằm ở đằng trước (prefix):
      
      Tăng giá trị lên (number giờ là 2)
      Trả về giá trị (trả về 2)
      Vậy kết quả là 0 2 2.
    `,
    tags: "question12, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      function checkAge(data) {
        if (data === { age: 18 }) {
          console.log("You are an adult!");
        } else if (data == { age: 18 }) {
          console.log("You are still an adult.");
        } else {
          console.log('Hmm.. You don't have an age I guess');
        }
      }
      
      checkAge({ age: 18 });
    `,
    select: [`You are an adult!`, `You are still an adult.`, `Hmm.. You don't have an age I guess`],
    result: `
      Đáp án: C
      Khi test sự bằng nhau, các kiểu dữ liệu cơ bản sẽ so sánh giá trị của chúng, còn object thì so sánh tham chiếu. JavaScript sẽ kiểm tra xem các object đó có trỏ đến những vùng nhớ giống nhau hay không.
      
      Hai object chúng ta đang so sánh không có được điều đó: object đối số tham chiếu đến một vùng nhớ khác với object chúng ta dùng để kiểm tra sự bằng nhau.
      
      Đó là lý do tại sao cả { age: 18 } === { age: 18 } và { age: 18 } == { age: 18 } đều trả về false.
    `,
    tags: "question13, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      function getAge(...args) {
        console.log(typeof args);
      }
      
      getAge(21);
    `,
    select: [`"number"`, `"array"`, `"object"`, "NaN"],
    result: `
      Spread operator (...args.) sẽ trả về một mảng các đối số. Mảng thực chất là một object, vậy nên typeof args sẽ trả về "object".
    `,
    tags: "question14, question",
  },
  {
    title: "Gán giá trị",
    question: "Output là gì?",
    codeQuestion: `
      function getAge() {
        "use strict";
        age = 21;
        console.log(age);
      }
      
      getAge();
    `,
    select: [`21`, `undefined`, `ReferenceError`, "TypeError"],
    result: `
      Đáp án: C
      Với "use strict", chúng ta sẽ đảm bảo được rằng ta sẽ không bao giờ khai báo biến global một cách vô ý. Tại đây chúng ta chưa khai báo biến age, và khi dùng "use strict", nó sẽ throw ra một reference error. Nếu như không dùng "use strict", nó sẽ vẫn hoạt động, vì thuộc tính age sẽ được thêm vào global object.
    `,
    tags: "question15, question",
  },
  {
    title: "Gán giá trị",
    question: "Giá trị của sum là gì?",
    codeQuestion: `
      const sum = eval("10*10+5");
    `,
    select: [`105`, `"105"`, `TypeError`, `"10*10+5"`],
    result: `
    Đáp án: A
    eval sẽ đánh giá đoạn code bên trong string. Nếu nó là một biểu thức, giống như trong trường hợp này, nó sẽ tính toán giá trị đó. Biểu thức là 10 * 10 + 5, kết quả sẽ là 105.
    `,
    tags: "question16, question",
  },
  {
    title: "sessionStorage",
    question: "Biến cool_secret sẽ truy cập được trong bao lâu?",
    codeQuestion: `
      sessionStorage.setItem("cool_secret", 123);
    `,
    select: [`Mãi mãi, dữ liệu sẽ không bao giờ mất.`, `Khi user đóng tab lại.`, `Khi user không chỉ là đóng tab, mà đóng browser lại.`, `Khi user tắt máy tính đi.`],
    result: `
      Đáp án: B
      Dữ liệu được lưu trữ trong sessionStorage sẽ được xóa khi đóng tab.
      
      Nếu chúng ta dùng localStorage, data sẽ được lưu trữ mãi mãi, trừ phi hàm localStorage.clear() được gọi.
    `,
    tags: "question17, question",
  },  
  {
    title: "Output là gì?",
    question: "Output là gì?",
    codeQuestion: `
      var num = 8;
      var num = 10;
      
      console.log(num);
    `,
    select: [`8`, `10`, `SyntaxError`, `ReferenceError`],
    result: `
      Với từ khóa var bạn có thể khai báo bao nhiêu biến trùng tên tùy thích. Biến đó sẽ có giá trị là lần cuối khai báo.

      Bạn không thể làm điều tương tự với let hay const vì chúng là block-scoped.
    `,
    tags: "question18, question",
  },  
  {
    title: "Output là gì?",
    question: "Output là gì?",
    codeQuestion: `
      const obj = { 1: "a", 2: "b", 3: "c" };
      const set = new Set([1, 2, 3, 4, 5]);
      
      obj.hasOwnProperty("1");
      obj.hasOwnProperty(1);
      set.has("1");
      set.has(1);
    `,
    select: [`false true false true`, `false true true true`, `true true false true`, `true true true true`],
    result: `
      Đáp án: C
      Tất cả các keys của object (ngoại trừ Symbols) về bản chất đều là string, dù chúng ta có viết chúng ra dạng string hay không. Nó là lý do tại sao obj.hasOwnProperty('1') cũng trả về true.
      
      Tuy nhiên điều đó không đúng với set. Không hề có '1' trong set của chúng ta: set.has('1') trả về false. Có số 1 trong set, nên set.has(1) trả về true.
    `,
    tags: "question19, question",
  },  
  {
    title: "Output là gì?",
    question: "Output là gì?",
    codeQuestion: `
      const obj = { a: "one", b: "two", a: "three" };
      console.log(obj);
    `,
    select: [`{ a: "one", b: "two" }`, `{ b: "two", a: "three" }`, `{ a: "three", b: "two" }`, `SyntaxError`],
    result: `
      Đáp án: C
      Nếu chúng ta có 2 keys giống nhau, thì chúng sẽ bị replace. Nó sẽ vẫn nằm ở vị trí đầu tiên chúng được khai báo, nhưng giá trị thì sẽ là giá trị lần cuối.
    `,
    tags: "question20, question",
  },  
  {
    title: `Ngữ cảnh thực thi global của JavaScript tạo ra 2 thứ cho chúng ta: global object, và từ khóa "this".`,
    question: `Ngữ cảnh thực thi global của JavaScript tạo ra 2 thứ cho chúng ta: global object, và từ khóa "this".`,
    codeQuestion: `
    `,
    select: [`đúng`, `sai`, `còn tùy`],
    result: `
      Đáp án: A
      Ngữ cảnh thực thi cơ bản chính là ngữ cảnh global: nó là thứ mà chúng ta có thể truy cập được ở bất cứ đâu trong code.
    `,
    tags: "question21, question",
  },
  {
    title: `Output là gì?`,
    question: `Output là gì?`,
    codeQuestion: `
      String.prototype.giveLydiaPizza = () => {
        return "Just give Lydia pizza already!";
      };
      
      const name = "Lydia";
      
      name.giveLydiaPizza();
    `,
    select: [`"Just give Lydia pizza already!"`, `TypeError: not a function`, `SyntaxError`, `undefined`],
    result: `
      Đáp án: A
      String là một built-in constructor, có nghĩa là chúng ta có thể thêm các thuộc tính vào đó. Ta vừa thêm vào đó một thuộc tính. Kiểu String cơ bản sẽ được convert sang dạng object bởi hàm string prototype. Vì thế nên tất cả các string object đều có thể truy cập đến hàm giveLydiaPizza này!
    `,
    tags: "question22, question",
  }, 
  {
    title: `Output là gì?`,
    question: `Output là gì?`,
    codeQuestion: `
      const a = {};
      const b = { key: "b" };
      const c = { key: "c" };
      
      a[b] = 123;
      a[c] = 456;
      
      console.log(a[b]);
    `,
    select: [`123`, `456`, `undefined`, `ReferenceError`],
    result: `
      Đáp án: B

      Object keys sẽ tự động được convert sang dạng string. Chúng ta đang set một object như là một key cho object a, với giá trị là 123.
      
      Tuy nhiên khi ta string hóa một object, nó sẽ trở thành "[object Object]". Nên tại đây phép gán này thực chất chính là a["object Object"] = 123. Phép gán tiếp theo cũng giống hệt vậy. c là một object khác mà chúng ta đang string hóa nó. Theo đó, a["object Object"] = 456.
      
      Cuối cùng khi gọi a[b], thực chất chính là gọi a["object Object"]. Giá trị của nó là 456, nên trả về là 456.
    `,
    tags: "question23, question",
  }, 
  {
    title: `Output là gì?`,
    question: `Output là gì?`,
    codeQuestion: `
      const foo = () => console.log("First");
      const bar = () => setTimeout(() => console.log("Second"));
      const baz = () => console.log("Third");
      
      bar();
      foo();
      baz();
    `,
    select: [`First Second Third`, `First Third Second`, `Second First Third`, `Second Third First`],
    result: `
      Đáp án: B
      Chúng ta có một hàm setTimeout được gọi đầu tiên. Nên, nó sẽ được log ra cuối cùng.
      
      Điều đó bởi vì trên browser, chúng ta không hề có runtime engine, đơn thuần chỉ có WebAPI. WebAPI cho chúng ta một hàm setTimeout, ta hãy ví dụ nó trên DOM.
      
      Sau khi callback được gửi tới WebAPI, bản thân hàm setTimeout (nhưng không phải callback nhé!) sẽ được đưa ra khỏi stack.
      
      
      Giờ đây, foo được gọi, và "First" được log ra.
      
      
      foo được đưa ra khỏi stack, và baz được gọi. "Third" được log ra.
      
      
      WebAPI không thể thêm thứ gì đó vào stack cho tới khi nó được sẵn sàng. Thay vào đó, nó đẩy callback function đến một nơi gọi là queue.
      
      
      Đó chính là nơi mà event loop làm việc. Một event loop sẽ quan sát stack và task queue. Nếu stack trở nên rỗng, nó sẽ lấy giá trị đầu tiên trong queue để đưa tiếp vào stack.
      
      
      bar được gọi, "Second" được log ra, và nó được đưa ra khỏi stack.
    `,
    tags: "question24, question",
  },       
  
];
