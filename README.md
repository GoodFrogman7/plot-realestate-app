#

## 🚀 How to Run Locally

**Pre-requisites:**
- Node.js (v18 recommended; avoid v22 unless you apply the fix below)
- npm installed

```bash
# Step 1: Clone the repository
git clone https://github.com/GoodFrogman7/plot-realestate-app.git
cd plot-realestate-app

# Step 2: Install dependencies
npm install

# Step 3: Start the development server
npm start

⚠️ If you get this error:
Error: error:0308010C:digital envelope routines::unsupported

Use this workaround before running:
# On Windows PowerShell:
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm start

🧾 License
This project is licensed under the MIT License.

🤝 Contributing
Pull requests are welcome! Please open an issue first to discuss what you would like to change.


