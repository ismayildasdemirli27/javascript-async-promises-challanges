# JavaScript — Async JavaScript & Promises Challenges

## 📚 Mövzu: Promises, Promise Chaining, Async/Await və Error Handling

Bu tapşırıqların məqsədi JavaScript-də öyrəndiyiniz asinxron proqramlaşdırma anlayışlarını praktiki layihələr üzərində tətbiq etməkdir.

Tapşırıqlarda `Promise`, `resolve()`, `reject()`, `.then()`, `.catch()`, `.finally()`, `async/await`, `try/catch` və `setTimeout()` istifadə olunacaq.

Bütün tapşırıqlar **Vanilla JavaScript** ilə hazırlanmalıdır. İstifadəçi interfeysi yaratmaq məcburi deyil. Nəticələrin Console-da göstərilməsi kifayətdir.

## 📋 Tapşırıqlar

| № | Tapşırıq                         | Səviyyə           | Müddət           |
|---|----------------------------------|-------------------|------------------|
| 1 | Order Processing System          | Easy–Medium       | 20–30 dəq.       |
| 2 | User Data Loading System         | Medium            | 30–40 dəq.       |
| 3 | Online Payment Processing System | Hard              | 40–55 dəq.       |

---

# Task 1 — Order Processing System

**Səviyyə:** Easy–Medium

**Mövzular:** Promise, resolve(), reject(), .then(), .catch(), .finally(), setTimeout()

## 📌 Tapşırığın izahı

Onlayn mağaza üçün sadə sifariş emal sistemi hazırlamalısınız.

İstifadəçi sifariş verdikdə sistem həmin sifarişin mövcudluğunu və məhsulun anbarda olub-olmadığını yoxlamalıdır.

Yoxlama əməliyyatı **2 saniyə** davam etməlidir. Bu müddət `setTimeout()` vasitəsilə simulyasiya olunmalıdır.

Məhsul anbarda varsa sifariş uğurla tamamlanmalı, əks halda uyğun xəta mesajı göstərilməlidir.

## 💻 Başlanğıc məlumatları

Aşağıdakı məhsul siyahısından istifadə edin:

```javascript
const orders = [
    { id: 1, product: "Laptop", stock: 5 },
    { id: 2, product: "Mouse", stock: 0 },
    { id: 3, product: "Keyboard", stock: 8 }
];
```

## ⚙️ Funksional tələblər

1. `processOrder(orderId)` adlı funksiya yaradın.
2. Funksiya `Promise` qaytarmalıdır.
3. Sifarişin yoxlanılması 2 saniyə çəkməlidir.
4. Sifariş mövcuddursa və `stock > 0` olarsa, Promise `resolve()` ilə tamamlanmalıdır.
5. Məhsulun `stock` dəyəri 0 olarsa, Promise `reject()` ilə tamamlanmalıdır.
6. Mövcud olmayan `orderId` üçün ayrıca xəta mesajı qaytarılmalıdır.
7. `.then()` vasitəsilə uğurlu sifariş mesajı göstərilməlidir.
8. `.catch()` vasitəsilə xəta mesajı göstərilməlidir.
9. `.finally()` vasitəsilə `Order process completed!` mesajı göstərilməlidir.

## 🔄 İşləmə ardıcıllığı

```text
          processOrder(orderId)
                   |
                   v
           Promise (Pending)
                   |
             Wait 2 seconds
                   |
                   v
            Find Order by ID
                   |
             Order Found?
              /        \
            YES         NO
             |           |
             v           v
        Check Stock    reject()
             |           |
        stock > 0?    Order not found!
          /    \
        YES     NO
         |       |
         v       v
      resolve() reject()
         |       |
         v       v
       .then()  .catch()
          \      /
           \    /
            v  v
          .finally()
```

## 🧪 Yoxlama ssenariləri

### Test 1 — Uğurlu sifariş

```javascript
processOrder(1);
```

**Gözlənilən nəticə (2 saniyə sonra):**

```text
Order processed successfully!
Product: Laptop
Order process completed!
```

### Test 2 — Məhsul anbarda yoxdur

```javascript
processOrder(2);
```

**Gözlənilən nəticə:**

```text
Product out of stock!
Order process completed!
```

### Test 3 — Sifariş tapılmadı

```javascript
processOrder(99);
```

**Gözlənilən nəticə:**

```text
Order not found!
Order process completed!
```

## ⭐ Bonus

- Sifariş uğurla tamamlandıqda məhsulun `stock` dəyərini 1 vahid azaldın.
- Məhsulun `stock` dəyəri sıfıra çatdıqda növbəti sifarişlərin qarşısını alın.
- Eyni anda bir neçə sifarişi emal etmək üçün `Promise.allSettled()` istifadə edin.

---

# Task 2 — User Data Loading System

**Səviyyə:** Medium

**Mövzular:** Promise Chaining, .then(), .catch(), async/await, try/catch, setTimeout()

## 📌 Tapşırığın izahı

Bir sosial platforma üçün istifadəçi məlumatlarının yüklənməsi sistemini hazırlamalısınız.

Sistem əvvəlcə istifadəçinin məlumatlarını əldə etməli, daha sonra həmin istifadəçiyə aid postları yükləməlidir.

Bu iki əməliyyat **ardıcıl şəkildə** həyata keçirilməlidir.

Yəni istifadəçinin məlumatları yüklənmədən onun postları yüklənməməlidir.

Tapşırıq iki fərqli yanaşma ilə hazırlanmalıdır:

1. **Promise Chaining** — `.then()` və `.catch()` istifadə edərək.
2. **Async/Await** — `async`, `await` və `try/catch` istifadə edərək.

Hər iki yanaşma eyni nəticəni verməlidir.

## 💻 Başlanğıc məlumatları

```javascript
const users = [
    { id: 1, name: "Ali", age: 21 },
    { id: 2, name: "Leyla", age: 23 },
    { id: 3, name: "Murad", age: 20 }
];

const posts = [
    { id: 1, userId: 1, title: "Learning JavaScript" },
    { id: 2, userId: 1, title: "My First Project" },
    { id: 3, userId: 2, title: "Web Development" },
    { id: 4, userId: 3, title: "Async Programming" },
    { id: 5, userId: 3, title: "Understanding Promises" }
];
```

## ⚙️ Funksional tələblər

1. `getUser(userId)` adlı funksiya yaradın.
2. Funksiya `Promise` qaytarmalıdır.
3. İstifadəçi məlumatları 1 saniyə sonra qaytarılmalıdır.
4. İstifadəçi tapılmadıqda Promise `reject()` ilə tamamlanmalıdır.
5. `getUserPosts(userId)` adlı ikinci funksiya yaradın.
6. Bu funksiya da `Promise` qaytarmalıdır.
7. Postların yüklənməsi 1.5 saniyə çəkməlidir.
8. Əvvəlcə istifadəçi, daha sonra onun postları yüklənməlidir.
9. İstifadəçinin adı, yaşı və postları Console-da göstərilməlidir.
10. İlk olaraq sistemi `.then()` ilə Promise Chaining istifadə edərək hazırlayın.
11. Daha sonra eyni sistemi `async/await` ilə yenidən yazın.
12. Xətaları `.catch()` və ya `try/catch` vasitəsilə idarə edin.

## 🔄 İşləmə ardıcıllığı

```text
             START
               |
               v
        getUser(userId)
               |
          Wait 1 second
               |
               v
          User Found?
           /       \
         YES        NO
          |          |
          v          v
     User Loaded   reject()
          |          |
          v          v
   getUserPosts()  Error Message
          |
     Wait 1.5 sec
          |
          v
      Posts Loaded
          |
          v
   Display User + Posts
          |
          v
          END
```

## 🧪 Yoxlama ssenariləri

### Test 1 — User ID: 1

**Gözlənilən nəticə:**

```text
Loading user...

User: Ali
Age: 21

Loading posts...

Posts:
1. Learning JavaScript
2. My First Project

Data loaded successfully!
```

### Test 2 — User ID: 2

**Gözlənilən nəticə:**

```text
Loading user...

User: Leyla
Age: 23

Loading posts...

Posts:
1. Web Development

Data loaded successfully!
```

### Test 3 — User ID: 99

**Gözlənilən nəticə:**

```text
Loading user...

Error: User not found!
```

Bu halda `getUserPosts()` çağırılmamalıdır.

## ⭐ Bonus

- İstifadəçinin postları olmadıqda `This user has no posts` mesajı göstərin.
- `getUserComments(userId)` adlı üçüncü asinxron funksiya yaradın.
- İstifadəçi məlumatları yükləndikdən sonra postları və şərhləri paralel yükləmək üçün `Promise.all()` istifadə edin.

---

# Task 3 — Online Payment Processing System

**Səviyyə:** Hard

**Mövzular:** Promise Chaining, async/await, try/catch/finally, resolve(), reject(), Error Handling

## 📌 Tapşırığın izahı

Onlayn mağaza üçün asinxron ödəniş emal sistemi hazırlamalısınız.

İstifadəçi məhsul almaq istədikdə sistem aşağıdakı mərhələlərdən keçməlidir:

1. Sifarişin yoxlanılması.
2. Ödənişin həyata keçirilməsi.
3. Ödəniş təsdiqinin yaradılması.

Hər mərhələ asinxron işləməlidir və əvvəlki mərhələ uğurla tamamlanmadan növbəti mərhələ başlamamalıdır.

Sifariş mövcud deyilsə, məhsul satışda deyilsə və ya istifadəçinin balansı kifayət etmirsə, proses dayandırılmalı və uyğun xəta mesajı göstərilməlidir.

## 💻 Başlanğıc məlumatları

```javascript
const orders = [
    {
        id: 101,
        product: "Laptop",
        price: 1200,
        available: true
    },
    {
        id: 102,
        product: "Mouse",
        price: 25,
        available: false
    },
    {
        id: 103,
        product: "Monitor",
        price: 300,
        available: true
    }
];

let userBalance = 1500;
```

## ⚙️ Funksional tələblər

### 1. checkOrder(orderId)

1. `checkOrder(orderId)` adlı funksiya yaradın.
2. Funksiya `Promise` qaytarmalıdır.
3. Sifarişin yoxlanılması 1 saniyə çəkməlidir.
4. Sifariş mövcud deyilsə, Promise `reject()` ilə tamamlanmalıdır.
5. Məhsulun `available` dəyəri `false` olarsa, xəta qaytarılmalıdır.
6. Sifariş mövcuddursa və məhsul satışdadırsa, Promise `resolve()` ilə tamamlanmalıdır.

### 2. processPayment(order)

1. `processPayment(order)` adlı funksiya yaradın.
2. Funksiya `Promise` qaytarmalıdır.
3. Ödənişin emalı 2 saniyə çəkməlidir.
4. İstifadəçinin balansı məhsulun qiyməti ilə müqayisə edilməlidir.
5. Balans kifayət etmirsə, Promise `reject()` ilə tamamlanmalıdır.
6. Balans kifayət edirsə, məhsulun qiyməti balansdan çıxılmalıdır.
7. Ödəniş uğurla tamamlandıqda Promise `resolve()` ilə nəticələnməlidir.

### 3. generateReceipt(order)

1. `generateReceipt(order)` adlı funksiya yaradın.
2. Funksiya `Promise` qaytarmalıdır.
3. Təsdiqin yaradılması 1 saniyə çəkməlidir.
4. Təsdiqdə sifariş nömrəsi, məhsulun adı, qiyməti və ödəniş statusu göstərilməlidir.
5. Təsdiq hazır olduqda Promise `resolve()` ilə tamamlanmalıdır.

### 4. completePurchase(orderId)

1. `completePurchase(orderId)` adlı `async` funksiya yaradın.
2. `checkOrder()` funksiyasını `await` ilə çağırın.
3. Sifariş uğurludursa, `processPayment()` funksiyasını çağırın.
4. Ödəniş uğurludursa, `generateReceipt()` funksiyasını çağırın.
5. Bütün mərhələlər ardıcıl icra olunmalıdır.
6. Xətaları `try/catch` vasitəsilə idarə edin.
7. `finally` daxilində `Payment process finished!` mesajını göstərin.
8. Ödənişdən sonra istifadəçinin qalan balansını göstərin.
9. Eyni sifarişin təkrar ödənilməsinin qarşısını alın.

## 🔄 İşləmə ardıcıllığı

```text
                 START
                   |
                   v
           checkOrder(orderId)
                   |
               Wait 1 sec
                   |
                   v
             Order Valid?
              /       \
            YES        NO
             |          |
             v          v
       processPayment() reject()
             |          |
         Wait 2 sec      |
             |          |
             v          |
       Balance Enough?   |
          /      \       |
        YES       NO     |
         |         |     |
         v         v     |
    Deduct Balance reject()
         |         |     |
         v         |     |
   generateReceipt()     |
         |               |
     Wait 1 sec          |
         |               |
         v               |
   Payment Successful    |
         |               |
         v               v
      Show Receipt    catch(error)
         |               |
         └───────┬───────┘
                 |
                 v
              finally()
                 |
                 v
                END
```

## 🧪 Yoxlama ssenariləri

### Test 1 — Uğurlu ödəniş

```javascript
completePurchase(101);
```

**Gözlənilən nəticə:**

```text
Checking order...

Order verified!
Product: Laptop

Processing payment...

Payment successful!
Amount paid: $1200

Generating receipt...

Receipt generated!
Order ID: 101
Product: Laptop
Amount: $1200
Status: Paid

Remaining balance: $300

Payment process finished!
```

### Test 2 — Məhsul satışda deyil

```javascript
completePurchase(102);
```

**Gözlənilən nəticə:**

```text
Checking order...

Error: Product is not available!

Payment process finished!
```

### Test 3 — Balans kifayət etmir

Bu ssenaridə əvvəlcə `completePurchase(101)` uğurla tamamlanır və balans `$300` olur.

Daha sonra eyni sifarişi yenidən ödəməyə çalışmadan, başqa sifariş üçün balansdan daha yüksək qiymət müəyyən edib sistemi yoxlayın.

**Gözlənilən nəticə:**

```text
Checking order...

Order verified!

Processing payment...

Error: Insufficient balance!

Payment process finished!
```

### Test 4 — Sifariş tapılmadı

```javascript
completePurchase(999);
```

**Gözlənilən nəticə:**

```text
Checking order...

Error: Order not found!

Payment process finished!
```

### Test 5 — Təkrar ödəniş

Uğurla ödənilmiş sifariş üçün `completePurchase()` yenidən çağırıldıqda:

```text
Error: This order has already been paid!

Payment process finished!
```

**Qeyd:** Testlərdə balans və ödənilmiş sifarişlərin vəziyyəti əvvəlki əməliyyatlardan asılıdır. Hər testi müstəqil yoxlamaq üçün başlanğıc vəziyyətini bərpa edə bilərsiniz.

## ⭐ Bonus

- Ödəniş tarixçəsi yaradın.
- Hər uğurlu ödəniş üçün `orderId`, `amount`, `remainingBalance` və `date` məlumatlarını saxlayın.
- İstifadəçi balansını artırmaq üçün ayrıca asinxron funksiya yaradın.
- Bir neçə ödəniş eyni vaxtda başladıqda balansın səhv hesablanmasının və təkrar ödənişin qarşısını alın.

---

# 📋 Ümumi qaydalar

1. Bütün tapşırıqlar **Vanilla JavaScript** ilə hazırlanmalıdır.
2. Asinxron əməliyyatlar `Promise` və `setTimeout()` vasitəsilə simulyasiya olunmalıdır.
3. `resolve()` və `reject()` düzgün istifadə edilməlidir.
4. Promise nəticələri `.then()`, `.catch()` və ya `async/await` vasitəsilə idarə olunmalıdır.
5. Xətalar düzgün şəkildə tutulmalı və göstərilməlidir.
6. Tapşırıqların əsas məntiqi tələbələr tərəfindən yazılmalıdır.
7. Hazır JavaScript framework-lərindən istifadə edilməməlidir.
8. İstifadəçi interfeysi məcburi deyil. Console nəticələri kifayətdir.
9. Kod oxunaqlı və səliqəli formada yazılmalıdır.
10. Hər tapşırıq ayrıca qovluqda hazırlanmalıdır.

## 📊 Qiymətləndirmə meyarları

| Meyar | Bal |
|---|---:|
| Funksional tələblərin yerinə yetirilməsi | 35 |
| Promise, resolve və reject istifadəsi | 20 |
| Promise Chaining və Async/Await | 20 |
| Error Handling | 15 |
| Kodun oxunaqlılığı və strukturu | 10 |
| **Ümumi** | **100** |

## 📤 Təhvil verilmə qaydası

1. Hər tapşırığı ayrıca qovluqda hazırlayın.
2. JavaScript fayllarını müvafiq qovluqlarda yerləşdirin.
3. Kodları işə salaraq bütün yoxlama ssenarilərini test edin.
4. Layihəni GitHub repository-yə yükləyin.
5. Repository linkini müəllimə təqdim edin.

## 📁 Tövsiyə olunan qovluq strukturu

```text
javascript-async-promises-challenges/
│
├── README.md
│
├── task-01-order-processing/
│   └── script.js
│
├── task-02-user-data-loading/
│   └── script.js
│
└── task-03-payment-processing/
    └── script.js
```

---

**Uğurlar! 🚀**

Bu tapşırıqların məqsədi JavaScript-də asinxron əməliyyatları düzgün idarə etməyi, Promise-lərlə işləməyi və real layihələrdə istifadə olunan proqramlaşdırma məntiqini inkişaf etdirməkdir.