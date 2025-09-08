const firebaseConfig={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET"};
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore(); const storage=firebase.storage();

// 업로드
const form=document.getElementById('uploadForm');
if(form){
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    const file=document.getElementById('file').files[0];
    const title=document.getElementById('title').value;
    const description=document.getElementById('description').value;
    const storageRef=storage.ref('images/'+file.name);
    await storageRef.put(file);
    const url=await storageRef.getDownloadURL();
    await db.collection('gallery').add({title,description,url});
    document.getElementById('status').textContent="업로드 완료!";
  });
}

// 갤러리 표시
const galleryDiv=document.getElementById('gallery');
if(galleryDiv){
  db.collection('gallery').get().then(snapshot=>{
    galleryDiv.innerHTML='';
    snapshot.forEach(doc=>{
      const data=doc.data();
      const div=document.createElement('div');
      div.innerHTML=`<h3>${data.title}</h3><img src="${data.url}" alt="${data.title}" width="200"><p>${data.description}</p>`;
      galleryDiv.appendChild(div);
    });
  });
}
