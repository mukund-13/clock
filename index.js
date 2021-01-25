setInterval(() => {
   d = new Date();
   h_time = d.getHours();
   m_time = d.getMinutes();
   s_time = d.getSeconds();
   h_rot = 30*h_time + m_time/2;
   m_rot = 6*m_time;
   s_rot = 6*s_time;

   hour.style.transform = `rotate(${h_rot}deg)`;
   min.style.transform = `rotate(${m_rot}deg)`;
   sec.style.transform = `rotate(${s_rot}deg)`;
}, 1000);



