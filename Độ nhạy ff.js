// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: magic;
const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Tìm Độ Nhạy Free Fire</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,sans-serif;background:#0d0d1a;color:#fff;padding:15px}
.c{max-width:500px;margin:0 auto}
h1{text-align:center;font-size:1.3em;background:linear-gradient(90deg,#f60,#fa0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:5px}
.sub{text-align:center;color:#888;font-size:.78em;margin-bottom:15px}
.s{font-size:.82em;font-weight:700;color:#fa0;margin:12px 0 6px;border-bottom:1px solid rgba(255,140,0,.2);padding-bottom:4px}
.g{display:grid;grid-template-columns:1fr 1fr;gap:8px}
label{font-weight:600;color:#bbb;font-size:.72em;display:block;margin-bottom:2px}
select{width:100%;padding:9px;border-radius:10px;border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.5);color:#fff;font-size:.82em;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M5 7L1 3h8z' fill='%23fa0'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:28px}
select:focus{outline:none;border-color:#fa0}
.prob{display:flex;flex-wrap:wrap;gap:5px}
.p{display:flex;align-items:center;gap:5px;padding:7px 9px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:10px;font-size:.72em;color:#aaa;cursor:pointer;user-select:none;transition:.2s}
.p.on{background:rgba(255,80,0,.2);border-color:#f60;color:#fa0;font-weight:600}
.rng{display:flex;align-items:center;gap:8px;margin-top:4px}
.rng input[type=range]{flex:1;accent-color:#fa0;height:5px}
.rng span{color:#fa0;font-weight:700;font-size:.75em;min-width:60px;text-align:right}
.btn{width:100%;padding:13px;background:linear-gradient(90deg,#e63900,#fa0);border:none;border-radius:14px;color:#fff;font-size:1em;font-weight:700;cursor:pointer;margin:16px 0;text-transform:uppercase;letter-spacing:1px}
.res{background:rgba(0,0,0,.5);border-radius:16px;padding:18px;border:1px solid rgba(255,140,0,.3);display:none}
.res.show{display:block}
.diag{background:rgba(255,100,0,.08);border-left:3px solid #fa0;padding:10px;border-radius:0 10px 10px 0;margin-bottom:12px;font-size:.78em;line-height:1.5;color:#ddd}
.row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.06)}
.row:last-child{border-bottom:none}
.rl{color:#ccc;font-size:.8em}
.rv{font-weight:700;color:#fa0;background:rgba(255,140,0,.1);padding:4px 12px;border-radius:15px;font-size:.9em}
.note{margin-top:12px;padding:10px;background:rgba(255,255,255,.02);border-radius:10px;font-size:.75em;color:#888;text-align:center;line-height:1.5}
.hl{color:#fa0;font-weight:600}
.modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.85);display:flex;justify-content:center;align-items:center;z-index:999}
.modal-box{background:#1a1a2e;border:1px solid rgba(255,140,0,.4);border-radius:20px;padding:25px;width:90%;max-width:380px;text-align:center}
.modal-box h2{color:#fa0;margin-bottom:8px;font-size:1.1em}
.modal-box p{color:#888;font-size:.75em;margin-bottom:18px}
.modal-box input{width:100%;padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.5);color:#fff;font-size:1em;text-align:center;outline:none;letter-spacing:2px}
.modal-box input:focus{border-color:#fa0}
.modal-box .btn-sm{margin-top:14px;width:100%;padding:12px;background:linear-gradient(90deg,#e63900,#fa0);border:none;border-radius:12px;color:#fff;font-weight:700;font-size:.9em;cursor:pointer;text-transform:uppercase}
.modal-box .err{color:#f44;font-size:.72em;margin-top:8px;display:none}
.hidden{display:none!important}
.loading-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#0d0d1a;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1000}
.spinner{width:50px;height:50px;border:3px solid rgba(255,140,0,.2);border-top-color:#fa0;border-radius:50%;animation:spin .8s linear infinite;margin-bottom:18px}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-text{color:#fa0;font-size:.9em;font-weight:600;letter-spacing:1px}
.loading-sub{color:#888;font-size:.7em;margin-top:6px}
</style>
</head>
<body>

<!-- KEY MODAL (hiện đầu tiên) -->
<div class="modal" id="keyModal">
<div class="modal-box">
<h2>🔐 NHẬP KEY</h2>
<p>Nhập key để sử dụng công cụ</p>
<input type="text" id="keyInput" placeholder="Nhập key..." autocomplete="off">
<div class="err" id="keyErr">❌ Key không đúng!</div>
<button class="btn-sm" onclick="checkKey()">MỞ KHÓA</button>
</div>
</div>

<!-- LOADING SCREEN (ẩn ban đầu, hiện sau khi nhập key đúng) -->
<div class="loading-overlay hidden" id="loadingScreen">
<div class="spinner"></div>
<div class="loading-text">ĐANG TẢI DỮ LIỆU...</div>
<div class="loading-sub">Vui lòng chờ trong giây lát</div>
</div>

<!-- MAIN APP (ẩn ban đầu) -->
<div class="c hidden" id="mainApp">
<h1>🎯 CHẨN ĐOÁN TÂM SÚNG</h1>
<p class="sub">Nhập thông số máy & tình trạng tâm</p>
<div class="s">📱 THÔNG SỐ MÁY</div>
<div class="g">
<div><label>Hãng</label><select id="brand"><option value="">Chọn</option><option value="apple">iPhone</option><option value="samsung">Samsung</option><option value="xiaomi">Xiaomi/POCO</option><option value="oppo">OPPO</option><option value="vivo">Vivo</option><option value="realme">Realme</option><option value="oneplus">OnePlus</option><option value="huawei">Huawei</option><option value="asus">ASUS ROG</option><option value="nubia">Red Magic</option><option value="other">Khác</option></select></div>
<div><label>Màn hình</label><select id="screen"><option value="">Chọn</option><option value="4.7">4.7"</option><option value="5.5">5.5"</option><option value="6.1">6.1"</option><option value="6.3">6.3-6.4"</option><option value="6.5">6.5-6.6"</option><option value="6.7">6.7"</option><option value="6.8">6.8"+</option></select></div>
<div><label>Tần số quét</label><select id="hz"><option value="">Chọn</option><option value="60">60Hz</option><option value="90">90Hz</option><option value="120">120Hz</option><option value="144">144Hz</option><option value="165">165Hz+</option></select></div>
<div><label>Loại màn hình</label><select id="screenType"><option value="">Chọn</option><option value="zin">Màn zin (nguyên bản)</option><option value="lo">Màn lô (đã thay)</option></select></div>
</div>
<div class="s">🔍 TÌNH TRẠNG TÂM</div>
<div class="prob" id="problems">
<div class="p" data-v="loc_dau">🔴 Lố đầu</div>
<div class="p" data-v="giat">⚡ Giật/rung</div>
<div class="p" data-v="nang">🏋️ Nặng</div>
<div class="p" data-v="nhe">🪶 Nhẹ quá</div>
<div class="p" data-v="lech_p">➡️ Lệch phải</div>
<div class="p" data-v="lech_t">⬅️ Lệch trái</div>
<div class="p" data-v="giat_lui">🔫 Giật lùi</div>
<div class="p" data-v="ko_theo">👤 Ko theo MT</div>
</div>
<div class="s">✋ CẢM NHẬN TAY KÉO</div>
<div class="rng">
<span style="color:#aaa;font-size:.72em">Nặng</span>
<input type="range" id="weight" min="1" max="5" value="3" oninput="document.getElementById('wl').textContent=['','Rất nặng','Hơi nặng','Vừa','Hơi nhẹ','Rất nhẹ'][this.value]">
<span style="color:#aaa;font-size:.72em">Nhẹ</span>
<span id="wl">Vừa</span>
</div>
<button class="btn" onclick="calc()">🔬 CHẨN ĐOÁN</button>
<div class="res" id="res">
<div class="diag" id="diag"></div>
<div class="row"><span class="rl">🔭 Nhìn xung quanh</span><span class="rv" id="vCam">-</span></div>
<div class="row"><span class="rl">🎯 Ống ngắm hồng tâm</span><span class="rv" id="vAds">-</span></div>
<div class="row"><span class="rl">🔴 Ống ngắm 2x</span><span class="rv" id="v2x">-</span></div>
<div class="row"><span class="rl">🔭 Ống ngắm 4x</span><span class="rv" id="v4x">-</span></div>
<div class="row"><span class="rl">🔭 Ống ngắm súng ngắm</span><span class="rv" id="vDot">-</span></div>
<div class="row"><span class="rl">📐 Nút camera tự do</span><span class="rv" id="vGyro">-</span></div>
<div class="note" id="note"></div>
</div>
</div>

<script>
const VALID_KEY = KJAN-4MPB-5S9M';

function checkKey(){
    const input = document.getElementById('keyInput').value.trim();
    if(input === VALID_KEY){
        // Ẩn key modal, hiện loading
        document.getElementById('keyModal').classList.add('hidden');
        document.getElementById('loadingScreen').classList.remove('hidden');
        // Sau 1.5s loading thì hiện app chính
        setTimeout(function(){
            document.getElementById('loadingScreen').classList.add('hidden');
            document.getElementById('mainApp').classList.remove('hidden');
        }, 1500);
    } else {
        document.getElementById('keyErr').style.display = 'block';
        document.getElementById('keyInput').value = '';
    }
}
document.getElementById('keyInput').addEventListener('keydown', function(e){
    if(e.key === 'Enter') checkKey();
});

const probs=new Set();
document.querySelectorAll('.p').forEach(el=>{el.onclick=()=>{el.classList.toggle('on');probs[el.classList.contains('on')?'add':'delete'](el.dataset.v)}});

function calc(){
const b=document.getElementById('brand').value,s=document.getElementById('screen').value,h=document.getElementById('hz').value,st=document.getElementById('screenType').value;
if(!b||!s||!h||!st)return alert('Vui lòng chọn đầy đủ!');
const sz=parseFloat(s),hz=parseInt(h),w=parseInt(document.getElementById('weight').value);
const bf={apple:{n:'iPhone',ba:1,t:1,d:0,q:'Cảm ứng cao cấp'},samsung:{n:'Samsung',ba:.95,t:1.05,d:2,q:'Cảm ứng tốt'},xiaomi:{n:'Xiaomi',ba:.9,t:1.08,d:3,q:'Cảm ứng khá'},oppo:{n:'OPPO',ba:.88,t:1.1,d:4,q:'Trung bình'},vivo:{n:'Vivo',ba:.87,t:1.1,d:4,q:'Trung bình'},realme:{n:'Realme',ba:.89,t:1.09,d:3,q:'Khá'},oneplus:{n:'OnePlus',ba:.93,t:1.04,d:2,q:'Tốt'},huawei:{n:'Huawei',ba:.86,t:1.12,d:5,q:'Trung bình'},asus:{n:'ASUS ROG',ba:1.05,t:.95,d:0,q:'Gaming siêu nhạy'},nubia:{n:'Red Magic',ba:1.08,t:.92,d:0,q:'Gaming siêu nhạy'},other:{n:'Khác',ba:.9,t:1.08,d:3,q:'Tiêu chuẩn'}}[b];
let sf=6/sz,hf=60/hz;
let stFactor = st==='lo' ? 0.93 : 1.0;
let cam=Math.round(sf*hf*bf.ba*1.0*95*stFactor+bf.d*2);cam=Math.max(30,Math.min(100,cam));
let ads=Math.round(cam*.75);ads=Math.max(20,Math.min(95,ads));
let cm=0,am=0,gm=0,dg='';
if(st==='lo')dg+='📱 <span class="hl">Màn lô:</span> Cảm ứng kém nhạy hơn, đã điều chỉnh giảm nhẹ độ nhạy. ';
const dp={loc_dau:'🔴 <span class="hl">Lố đầu:</span> Giảm Nhìn xung quanh.',giat:'⚡ <span class="hl">Giật/rung:</span> Tăng Nút camera tự do.',nang:'🏋️ <span class="hl">Nặng:</span> Tăng Nhìn xung quanh + Ống ngắm hồng tâm.',nhe:'🪶 <span class="hl">Nhẹ quá:</span> Giảm Nhìn xung quanh.',lech_p:'➡️ <span class="hl">Lệch phải:</span> Chỉnh Nút camera tự do.',lech_t:'⬅️ <span class="hl">Lệch trái:</span> Chỉnh Nút camera tự do.',giat_lui:'🔫 <span class="hl">Giật lùi:</span> Tăng Nút camera tự do + Ống ngắm hồng tâm.',ko_theo:'👤 <span class="hl">Ko theo kịp:</span> Tăng Nhìn xung quanh + Nút camera tự do.'};
const adj={loc_dau:[-5,-4,0],giat:[-4,0,8],nang:[8,6,0],nhe:[-10,-6,0],lech_p:[-2,0,-5],lech_t:[-2,0,-5],giat_lui:[0,4,6],ko_theo:[6,0,5]};
probs.forEach(v=>{dg+=dp[v]+' ';cm+=adj[v][0];am+=adj[v][1];gm+=adj[v][2]});
if(w<=2){cm+=(3-w)*6;am+=(3-w)*4;dg+='✋ <span class="hl">Tay thấy nặng:</span> Tăng độ nhạy. '}
if(w>=4){cm-=(w-3)*6;am-=(w-3)*4;dg+='✋ <span class="hl">Tay thấy nhẹ:</span> Giảm độ nhạy. '}
if(!probs.size&&w==3&&st==='zin')dg='✅ <span class="hl">Tâm ổn định.</span> Độ nhạy cân bằng. ';
cam=Math.max(25,Math.min(100,cam+cm));ads=Math.max(15,Math.min(95,ads+am));
let dot=Math.round(ads*.85),x2=Math.round(ads*.65),x4=Math.round(ads*.45),gy=Math.round(sz*15+hz*.2+gm);
dot=Math.max(15,Math.min(90,dot));x2=Math.max(10,Math.min(80,x2));x4=Math.max(5,Math.min(60,x4));gy=Math.max(25,Math.min(95,gy));
document.getElementById('diag').innerHTML='<strong>📋 CHẨN ĐOÁN:</strong><br>'+dg+'<br><small style="color:#888">'+bf.n+' | '+bf.q+' | Màn '+(st==='lo'?'lô':'zin')+'</small>';
document.getElementById('vCam').textContent=cam+'%';
document.getElementById('vAds').textContent=ads+'%';
document.getElementById('vDot').textContent=dot+'%';
document.getElementById('v2x').textContent=x2+'%';
document.getElementById('v4x').textContent=x4+'%';
document.getElementById('vGyro').textContent=gy+'%';
let nt='💡 <span class="hl">Mẹo:</span> ';
if(hz>=120)nt+=hz+'Hz: ưu tiên Nút camera tự do. ';
if(sz>=6.7)nt+='Màn lớn: chơi 4-5 ngón. ';
if(b==='apple')nt+='iPhone nhạy, trượt thì giảm 5%. ';
if(['xiaomi','oppo','vivo','realme','huawei'].includes(b))nt+='Bật Nút camera tự do bù trễ cảm ứng. ';
if(st==='lo')nt+='Màn lô thường có độ trễ cao hơn, nên tăng Gyro bù. ';
nt+='Vào Phòng tập test ±3-5%.';
document.getElementById('note').innerHTML=nt;
document.getElementById('res').classList.add('show');
document.getElementById('res').scrollIntoView({behavior:'smooth'});
}
</script>
</body>
</html>`;

const webView = new WebView();
await webView.loadHTML(html);
await webView.present();
Script.complete();