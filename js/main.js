document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(e=>new bootstrap.Tooltip(e));
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(e=>new bootstrap.Popover(e));
const q=document.getElementById('qidiruv');
if(q)q.addEventListener('input',()=>{const v=q.value.toLowerCase();document.querySelectorAll('#kitoblar tr').forEach(r=>r.style.display=r.textContent.toLowerCase().includes(v)?'':'none');});
const f=document.getElementById('forma');
if(f)f.addEventListener('submit',e=>{e.preventDefault();if(f.checkValidity()){document.getElementById('natija').classList.remove('d-none');f.reset();f.classList.remove('was-validated');}else f.classList.add('was-validated');});
