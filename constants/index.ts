<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Md Naeem Ansari | Professional Profile</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg-dark: #07090e;
      --card-bg: rgba(15, 23, 42, 0.75);
      --card-border: rgba(56, 189, 248, 0.2);
      --accent-cyan: #00f2fe;
      --accent-blue: #4facfe;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --badge-bg: rgba(0, 242, 254, 0.08);
      --badge-border: rgba(0, 242, 254, 0.25);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    body {
      background-color: var(--bg-dark);
      background-image: 
        radial-gradient(at 0% 0%, rgba(79, 172, 254, 0.12) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(0, 242, 254, 0.08) 0px, transparent 50%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: var(--text-main);
    }

    /* Main Card Container */
    .profile-card {
      width: 100%;
      max-width: 480px;
      background: var(--card-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--card-border);
      border-radius: 28px;
      padding: 36px 30px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 242, 254, 0.05);
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .profile-card:hover {
      border-color: rgba(0, 242, 254, 0.4);
      transform: translateY(-4px);
    }

    /* Ambient Glow */
    .glow-overlay {
      position: absolute;
      top: -100px;
      right: -100px;
      width: 220px;
      height: 220px;
      background: radial-gradient(circle, rgba(0, 242, 254, 0.2), transparent 70%);
      pointer-events: none;
    }

    /* Avatar Section */
    .avatar-wrapper {
      position: relative;
      width: 130px;
      height: 130px;
      margin: 0 auto 22px;
      cursor: pointer;
    }

    .avatar-ring {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      animation: rotateRing 8s linear infinite;
      opacity: 0.85;
    }

    @keyframes rotateRing {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .avatar-inner {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      background: #111827;
      border: 3px solid #07090e;
    }

    .avatar-inner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }

    .avatar-wrapper:hover .avatar-inner img {
      transform: scale(1.08);
    }

    .click-hint {
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.85);
      border: 1px solid var(--accent-cyan);
      border-radius: 20px;
      padding: 2px 10px;
      font-size: 10px;
      font-weight: 600;
      color: var(--accent-cyan);
      letter-spacing: 0.5px;
      white-space: nowrap;
      text-transform: uppercase;
    }

    /* Identity */
    .identity {
      text-align: center;
      margin-bottom: 24px;
    }

    .name {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
      background: linear-gradient(to right, #ffffff, #cbd5e1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 6px;
    }

    .title-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: var(--badge-bg);
      border: 1px solid var(--badge-border);
      border-radius: 100px;
      font-size: 13px;
      font-weight: 600;
      color: var(--accent-cyan);
      letter-spacing: 0.3px;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      background: #10b981;
      border-radius: 50%;
      box-shadow: 0 0 8px #10b981;
    }

    /* Info Grid */
    .specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 22px;
    }

    .spec-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 16px;
      padding: 14px 16px;
      transition: background 0.2s ease, border-color 0.2s ease;
    }

    .spec-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(0, 242, 254, 0.3);
    }

    .spec-label {
      font-size: 11px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 4px;
      font-weight: 600;
    }

    .spec-value {
      font-size: 14px;
      font-weight: 700;
      color: #e2e8f0;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Core Metrics Banner */
    .metrics-banner {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.7));
      border: 1px solid rgba(0, 242, 254, 0.2);
      border-radius: 16px;
      padding: 16px 18px;
      margin-bottom: 24px;
      position: relative;
    }

    .metrics-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--accent-cyan);
      font-weight: 700;
      margin-bottom: 8px;
    }

    .metrics-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.5;
      font-weight: 400;
    }

    .metrics-desc strong {
      color: #f1f5f9;
      font-weight: 600;
    }

    /* Action Buttons */
    .actions {
      display: flex;
      gap: 10px;
    }

    .btn-primary {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 18px;
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      color: #040d1a;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      border-radius: 14px;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0, 242, 254, 0.25);
      transition: all 0.2s ease;
    }

    .btn-primary:hover {
      box-shadow: 0 6px 20px rgba(0, 242, 254, 0.4);
      transform: translateY(-1px);
    }

    .btn-secondary {
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #e2e8f0;
      font-size: 13px;
      font-weight: 600;
      border-radius: 14px;
      cursor: pointer;
      transition: background 0.2s ease, border-color 0.2s ease;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.25);
    }
  </style>
</head>
<body>

  <div class="profile-card">
    <div class="glow-overlay"></div>

    <!-- Avatar with 3-Way Fallback + Click Switch -->
    <div class="avatar-wrapper" onclick="cycleAvatarImage()" title="Click to switch photo source">
      <div class="avatar-ring"></div>
      <div class="avatar-inner">
        <img id="profileImg" 
             src="naeem.jpg" 
             alt="Md Naeem Ansari" 
             onerror="handleImageFallback(this)" />
      </div>
      <span class="click-hint" id="imgSourceLabel">Photo 1</span>
    </div>

    <!-- Identity Header -->
    <div class="identity">
      <h1 class="name">Md Naeem Ansari</h1>
      <div class="title-badge">
        <span class="status-dot"></span>
        <span>Electrical Engg. & System Developer</span>
      </div>
    </div>

    <!-- Specs Grid -->
    <div class="specs-grid">
      <div class="spec-card">
        <div class="spec-label">Discipline</div>
        <div class="spec-value">Electrical Engg.</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">Environment</div>
        <div class="spec-value">Python & Automation</div>
      </div>
    </div>

    <!-- Professional Security & Performance Section -->
    <div class="metrics-banner">
      <div class="metrics-title">High Performance & Security</div>
      <div class="metrics-desc">
        Integrated logic design, <strong>zero-downtime uptime engineering</strong>, and modern secure script architecture.
      </div>
    </div>

    <!-- Interactive Actions -->
    <div class="actions">
      <button class="btn-primary" onclick="cycleAvatarImage()">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
        Change Photo
      </button>
      <button class="btn-secondary" onclick="alert('System Status: 100% Operational\nBranch: Electrical Engg.\nSecurity: High-Performance Encrypted')">
        Verify Status
      </button>
    </div>
  </div>

  <script>
    // Fail-safe array: Local File -> High-Quality Online Avatar -> Dynamic Tech SVG
    const imageList = [
      { src: "naeem.jpg", name: "Local: naeem.jpg" },
      { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", name: "Online HD" },
      { src: "https://api.dicebear.com/7.x/bottts/svg?seed=NaeemAnsari", name: "Vector Avatar" }
    ];

    let currentIndex = 0;

    function updateAvatar() {
      const img = document.getElementById("profileImg");
      const label = document.getElementById("imgSourceLabel");
      img.src = imageList[currentIndex].src;
      label.innerText = imageList[currentIndex].name.split(":")[0];
    }

    // Fallback if current image fails to load
    function handleImageFallback(imgElement) {
      console.warn("Image load failed for:", imgElement.src);
      // Move to next image in pool automatically
      currentIndex = (currentIndex + 1) % imageList.length;
      imgElement.src = imageList[currentIndex].src;
      document.getElementById("imgSourceLabel").innerText = "Fallback";
    }

    // Manual click cycling (1st click -> 2nd image -> 3rd image -> repeat)
    function cycleAvatarImage() {
      currentIndex = (currentIndex + 1) % imageList.length;
      updateAvatar();
    }
  </script>
</body>
</html>
