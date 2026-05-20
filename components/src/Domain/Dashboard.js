const dashboardStyles = `
.dashboard-root {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 24px 24px 40px;
	font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	color: #eef2ff;
}

.dashboard-panel {
	background: rgba(8, 18, 31, 0.92);
	border: 1px solid rgba(148, 163, 184, 0.16);
	border-radius: 24px;
	padding: 28px;
	box-shadow: 0 24px 80px rgba(8, 18, 31, 0.25);
}

.dashboard-header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 24px;
	flex-wrap: wrap;
	margin-bottom: 32px;
}

.dashboard-header h2 {
	font-size: clamp(2rem, 2.4vw, 2.75rem);
	margin: 0;
	line-height: 1.05;
}

.dashboard-header p {
	max-width: 720px;
	color: #cbd5e1;
	font-size: 1rem;
	line-height: 1.8;
}

.dashboard-actions {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}

.dashboard-actions button {
	border: none;
	border-radius: 999px;
	padding: 12px 22px;
	font-size: 0.95rem;
	cursor: pointer;
	transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.btn-primary {
	background: #2563eb;
	color: #ffffff;
}

.btn-primary:hover {
	background: #1d4ed8;
	transform: translateY(-1px);
}

.btn-secondary {
	background: rgba(148, 163, 184, 0.12);
	color: #e2e8f0;
	border: 1px solid rgba(148, 163, 184, 0.24);
}

.btn-secondary:hover {
	background: rgba(148, 163, 184, 0.18);
}

.dashboard-grid {
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	gap: 20px;
}

.dashboard-card,
.login-panel,
.login-tip {
	background: #091424;
	border: 1px solid rgba(148, 163, 184, 0.14);
	border-radius: 22px;
	padding: 24px;
}

.login-panel {
	display: grid;
	grid-template-columns: 1fr 320px;
	gap: 24px;
}

.login-panel h3,
.section-header h3 {
	margin: 0 0 16px;
	font-size: 1.35rem;
}

.login-panel form,
.login-tip {
	display: grid;
	gap: 16px;
}

.login-panel label {
	display: grid;
	gap: 8px;
	font-size: 0.9rem;
	color: #cbd5e1;
}

.login-panel input,
.login-panel select {
	width: 100%;
	padding: 14px 16px;
	border-radius: 14px;
	border: 1px solid rgba(148, 163, 184, 0.16);
	background: rgba(15, 23, 42, 0.95);
	color: #eef2ff;
}

.login-panel input::placeholder {
	color: rgba(226, 232, 240, 0.6);
}

.login-panel button {
	width: fit-content;
}

.login-tip {
	padding: 26px;
}

.login-tip p {
	color: #cbd5e1;
	line-height: 1.7;
}

.login-tip .status-pill {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 10px 14px;
	border-radius: 999px;
	background: rgba(34, 197, 94, 0.12);
	color: #86efac;
	font-size: 0.9rem;
	border: 1px solid rgba(34, 197, 94, 0.18);
}

.dashboard-stats {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 18px;
	margin-bottom: 22px;
}

.stat-card {
	background: rgba(255, 255, 255, 0.04);
	border: 1px solid rgba(148, 163, 184, 0.08);
	border-radius: 18px;
	padding: 20px;
}

.stat-label {
	display: block;
	font-size: 0.8rem;
	color: #94a3b8;
	margin-bottom: 8px;
	text-transform: uppercase;
	letter-spacing: 0.12em;
}

.stat-value {
	font-size: 1.9rem;
	font-weight: 700;
	color: #f8fafc;
}

.stat-detail {
	margin-top: 8px;
	color: #cbd5e1;
	font-size: 0.92rem;
}

.dashboard-map {
	min-height: 300px;
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	background-image: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(15, 23, 42, 0.96));
}

.dashboard-map::before {
	content: '';
	position: absolute;
	inset: 0;
	background: radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.18), transparent 25%),
		radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.16), transparent 22%);
}

.dashboard-map-content {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.map-label {
	font-size: 0.85rem;
	color: #cbd5e1;
	margin-bottom: 10px;
}

.map-title {
	font-size: 1.4rem;
	margin: 0;
}

.map-pill {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 12px;
	border-radius: 999px;
	background: rgba(16, 185, 129, 0.12);
	color: #a7f3d0;
	font-size: 0.82rem;
	border: 1px solid rgba(16, 185, 129, 0.2);
	margin-top: 18px;
}

.dashboard-details {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 18px;
}

.detail-block {
	background: rgba(255, 255, 255, 0.04);
	border: 1px solid rgba(148, 163, 184, 0.08);
	border-radius: 18px;
	padding: 20px;
}

.detail-block h3 {
	margin-top: 0;
	margin-bottom: 12px;
	font-size: 1rem;
	color: #f8fafc;
}

.detail-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	gap: 12px;
}

.detail-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	font-size: 0.95rem;
	color: #cbd5e1;
}

.detail-value {
	color: #f8fafc;
	font-weight: 600;
}

.client-table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 18px;
}

.client-table th,
.client-table td {
	padding: 14px 16px;
	text-align: left;
	font-size: 0.95rem;
	color: #cbd5e1;
}

.client-table th {
	font-size: 0.82rem;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: #94a3b8;
}

.client-table tr:nth-child(even) {
	background: rgba(255, 255, 255, 0.03);
}

.status-chip {
	display: inline-flex;
	align-items: center;
	padding: 6px 10px;
	border-radius: 999px;
	font-size: 0.8rem;
	letter-spacing: 0.02em;
}

.status-chip.pending {
	background: rgba(251, 191, 36, 0.12);
	color: #fbbf24;
}

.status-chip.active {
	background: rgba(34, 197, 94, 0.12);
	color: #86efac;
}

.status-chip.review {
	background: rgba(59, 130, 246, 0.12);
	color: #93c5fd;
}

.section-header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 16px;
	flex-wrap: wrap;
	margin-bottom: 18px;
}

.section-header span {
	color: #94a3b8;
	font-size: 0.9rem;
}

@media (max-width: 920px) {
	.dashboard-panel,
	.login-panel {
		padding: 20px;
	}

	.dashboard-header,
	.section-header {
		flex-direction: column;
		align-items: stretch;
	}

	.dashboard-grid {
		gap: 18px;
	}

	.dashboard-stats {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.dashboard-details {
		grid-template-columns: 1fr;
	}

	.login-panel {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 640px) {
	.dashboard-root {
		padding: 18px 16px 32px;
	}

	.dashboard-header h2 {
		font-size: 2rem;
	}

	.dashboard-actions {
		width: 100%;
	}

	.dashboard-stats {
		grid-template-columns: 1fr;
	}

	.dashboard-card {
		padding: 18px;
	}

	.login-panel {
		padding: 18px;
	}
}
`;

const userData = {
	client: {
		name: 'Musa Kaluba',
		company: 'Green Harvest Farms',
		project: 'Crop Health Prediction',
		payment: '40% received',
		nextMilestone: 'Data collection underway',
		stats: [
			{ label: 'Active Projects', value: '2', detail: 'Monitoring crops across 300 ha' },
			{ label: 'Insights Delivered', value: '14', detail: 'Maps and actionable reports' },
			{ label: 'Team Response', value: '1h', detail: 'Support within one hour' }
		],
		mapNote: 'Live sensors and NDVI layers currently active',
		details: [
			{ label: 'Project stage', value: 'In progress' },
			{ label: 'Collection start', value: 'May 12, 2026' },
			{ label: 'Next delivery', value: 'May 28, 2026' },
			{ label: 'Remaining payment', value: '60%' }
		]
	},
	admin: {
		name: 'Admin',
		title: 'GeoIntel Operations',
		stats: [
			{ label: 'Live Clients', value: '8', detail: 'Active projects this quarter' },
			{ label: 'Pending Approvals', value: '3', detail: 'Proposal and invoice reviews' },
			{ label: 'Revenue', value: '$72k', detail: 'Committed from down payments' }
		],
		pipeline: [
			{ client: 'Green Harvest Farms', project: 'Crop Health Forecast', status: 'Active' },
			{ client: 'City of Lusaka', project: 'Flood Risk Map', status: 'Pending' },
			{ client: 'Copperbelt Mining', project: 'Asset Survey', status: 'Review' },
			{ client: 'Southern Water', project: 'Irrigation Network', status: 'Active' }
		],
		requirements: [
			{ label: '40% payment received', value: '4/8 clients' },
			{ label: 'Data collection', value: '5 active zones' },
			{ label: 'Dashboard logins', value: '99% uptime' }
		]
	}
};

function injectStyles() {
	if (document.getElementById('dashboard-style')) return;
	const style = document.createElement('style');
	style.id = 'dashboard-style';
	style.textContent = dashboardStyles;
	document.head.appendChild(style);
}

function clearRoot(root) {
	root.innerHTML = '';
}

function renderLoginScreen(root) {
	root.innerHTML = `
		<div class="dashboard-panel login-panel">
			<div>
				<div class="section-header">
					<div>
						<h2>Access your project dashboard</h2>
						<p>Enter your login details after the 40% down payment has been completed. Choose your role to preview user or admin views.</p>
					</div>
				</div>
				<form id="dashboard-login-form">
					<label>
						<span>Email</span>
						<input type="email" name="email" placeholder="hello@geointel.co" required />
					</label>
					<label>
						<span>Password</span>
						<input type="password" name="password" placeholder="••••••••" required />
					</label>
					<label>
						<span>Role</span>
						<select name="role">
							<option value="client">Client Dashboard</option>
							<option value="admin">Admin Dashboard</option>
						</select>
					</label>
					<button type="submit" class="btn-primary">Continue to Dashboard</button>
				</form>
			</div>
			<div class="login-tip">
				<h3>Project Status</h3>
				<p>Your 40% down payment has activated project tracking. The client dashboard will show delivery milestones, live map status, and financial progress.</p>
				<div class="status-pill">40% Down Payment Received</div>
				<p style="margin-top: 16px;">Once logged in, clients can review current sensor feeds, download reports, and track next milestones. Admins can see active client pipelines, approval requests, and revenue commitments.</p>
			</div>
		</div>
	`;

	const form = root.querySelector('#dashboard-login-form');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const formData = new FormData(form);
		const role = formData.get('role') || 'client';
		if (role === 'admin') {
			renderAdminDashboard(root);
		} else {
			renderUserDashboard(root);
		}
	});
}

function renderUserDashboard(root) {
	const data = userData.client;
	root.innerHTML = `
		<div class="dashboard-panel dashboard-header">
			<div>
				<h2>Welcome back, ${data.name}</h2>
				<p>Your project <strong>${data.project}</strong> is active after your 40% commitment. Track progress, finances, and delivery details in one place.</p>
			</div>
			<div class="dashboard-actions">
				<button class="btn-secondary" id="switch-to-login">Switch Account</button>
			</div>
		</div>

		<div class="dashboard-grid">
			<div class="dashboard-card dashboard-stats">
				${data.stats.map(stat => `
				<div class="stat-card">
					<div class="stat-label">${stat.label}</div>
					<div class="stat-value">${stat.value}</div>
					<div class="stat-detail">${stat.detail}</div>
				</div>
				`).join('')}
			</div>

			<div class="dashboard-card dashboard-map">
				<div class="dashboard-map-content">
					<div>
						<div class="map-label">Live project overview</div>
						<h3 class="map-title">${data.mapNote}</h3>
					</div>
					<div class="map-pill">40% payment confirmed</div>
				</div>
			</div>

			<div class="dashboard-card dashboard-details">
				<div class="detail-block">
					<h3>Current status</h3>
					<ul class="detail-list">
						<li class="detail-item"><span>Project owner</span><span class="detail-value">${data.company}</span></li>
						<li class="detail-item"><span>Client stage</span><span class="detail-value">${data.nextMilestone}</span></li>
						<li class="detail-item"><span>Payment status</span><span class="detail-value">${data.payment}</span></li>
						<li class="detail-item"><span>Next delivery</span><span class="detail-value">May 28, 2026</span></li>
					</ul>
				</div>
				<div class="detail-block">
					<h3>Milestone summary</h3>
					<ul class="detail-list">
						<li class="detail-item"><span>Proposal accepted</span><span class="detail-value">Complete</span></li>
						<li class="detail-item"><span>Deployment</span><span class="detail-value">Starting soon</span></li>
						<li class="detail-item"><span>Final payment</span><span class="detail-value">60% remaining</span></li>
					</ul>
				</div>
			</div>
		</div>
	`;

	root.querySelector('#switch-to-login').addEventListener('click', () => renderLoginScreen(root));
}

function renderAdminDashboard(root) {
	const data = userData.admin;
	root.innerHTML = `
		<div class="dashboard-panel dashboard-header">
			<div>
				<h2>${data.title} console</h2>
				<p>Admin control center for payment approvals, client pipelines, and project status after the 40% down payment stage.</p>
			</div>
			<div class="dashboard-actions">
				<button class="btn-secondary" id="switch-to-login">Sign Out</button>
			</div>
		</div>

		<div class="dashboard-grid">
			<div class="dashboard-card dashboard-stats">
				${data.stats.map(stat => `
				<div class="stat-card">
					<div class="stat-label">${stat.label}</div>
					<div class="stat-value">${stat.value}</div>
					<div class="stat-detail">${stat.detail}</div>
				</div>
				`).join('')}
			</div>

			<div class="dashboard-card">
				<div class="section-header">
					<div>
						<h3>Client pipeline</h3>
						<span>Active projects and approval states for funded work.</span>
					</div>
				</div>
				<table class="client-table">
					<thead>
						<tr><th>Client</th><th>Project</th><th>Status</th></tr>
					</thead>
					<tbody>
						${data.pipeline.map(item => `
						<tr>
							<td>${item.client}</td>
							<td>${item.project}</td>
							<td><span class="status-chip ${item.status.toLowerCase()}">${item.status}</span></td>
						</tr>
						`).join('')}
					</tbody>
				</table>
			</div>

			<div class="dashboard-card dashboard-details">
				<div class="detail-block">
					<h3>Executive summary</h3>
					<ul class="detail-list">
						${data.requirements.map(item => `
						<li class="detail-item"><span>${item.label}</span><span class="detail-value">${item.value}</span></li>
						`).join('')}
					</ul>
				</div>
				<div class="dashboard-map">
					<div class="dashboard-map-content">
						<div>
							<div class="map-label">Admin oversight</div>
							<h3 class="map-title">Review recent approvals and live client statuses</h3>
						</div>
						<div class="map-pill">40% funding stage</div>
					</div>
				</div>
			</div>
		</div>
	`;

	root.querySelector('#switch-to-login').addEventListener('click', () => renderLoginScreen(root));
}

export function renderDashboard(targetId) {
	injectStyles();
	const root = document.getElementById(targetId);
	if (!root) {
		console.error(`Dashboard root element not found: ${targetId}`);
		return;
	}
	clearRoot(root);
	renderLoginScreen(root);
}

