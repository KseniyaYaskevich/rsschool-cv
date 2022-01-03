# **Yaskevich Kseniya Leonidovna**
## **Junior Front-end Developer**
* *Location: Minsk, Belarus*
* *Age: 29*

---

### **Contact:**
* Phone: +375 29 540 75 00
* E-mail: yaskevi4kseniya@gmail.com
* Github: https://github.com/KseniyaYaskevich

---

### **Skills:**
* Figma
* HTML
* CSS/SASS
* JavaScript (Basic)

---

### **Language:**
* English (B1-B2)

---

### **About me:**

I have been interested in IT for a long time. I recently began to be fascinated by building websites. 
I am keen to gain more experience in the field. 
For this reason, I am looking for a company willing to offer me a placement among their developers. 
In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.

---

### **Edication:**

*MSLU (2011 - 2016)* «English Language» with the qualification of «Teacher»

*BSUIR (2019 - 2020)* «Information systems software» with the qualification of «Software engineer»

---

### **Work Experience:**

*Netologic (01.03.2013 - 31.07.2019)* Software support specialist

---

### **Code example:**
```
const filterTab = document.querySelectorAll('.filter__tab');
const filterContent = document.querySelectorAll('.filter__content');

filterTab.forEach((button, index) => {
    const btnOnClick = () => {
      if (!filterContent[index].classList.contains('filter__content--active')) {
        filterContent.forEach((content) => {
          content.classList.remove('filter__content--active');
        });
        filterTab.forEach((button) => {
          button.classList.remove('filter__tab--active');
        });
      }
      filterContent[index].classList.add('filter__content--active');
      filterTab[index].classList.add('filter__tab--active');
    };
    button.addEventListener('click', btnOnClick);
  });
```

---