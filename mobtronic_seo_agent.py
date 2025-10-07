
import os
import json
import datetime
import requests
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables from .env file
load_dotenv()

# Initialize OpenAI client
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1")
)

# Configuration
WEBSITE_URL = "https://mobtronic.org"
GITHUB_REPO_PATH = "/home/ubuntu/mobtronic-org"
IMPROVED_REACT_APP_PATH = "/home/ubuntu/katalystvc-improved" # This path is for the source code, not the deployed site
SEO_REPORTS_DIR = "./seo_reports"

# Ensure SEO reports directory exists
os.makedirs(SEO_REPORTS_DIR, exist_ok=True)

# User's professional profile details (extracted from PDF)
USER_PROFILE = """
Kavoosh Mohajeri is an accomplished Senior Consultant with 6+ years of experience in information technology and network administration. Holds a Master of Health Administration. Expertise includes cloud-based implementations/upgrades, Azure Active Directory, databases, O365 Infrastructure, vendor management, MFA/SSO, and critical domain cutovers. Specializes in tech roadmapping, strategy, ML, cloud, DevOps, cybersecurity, and AI. Bridges technology and finance/healthcare.

Key Skills & Experience:
- Business Growth Strategies, Intellectual Property, IT Project Leadership
- Cloud & DevOps: Continuous Transformation, Azure migrations, centralized cloud management (GCP, AWS, Azure)
- Cybersecurity: Ransomware mediation, isolation, removal, MFA, SSO, Intune, ISO 27001, SSAE 16 compliance
- Data: Databases (MS SQL, SSRS, SSMS), wearable data analysis, data privacy regulations
- Healthcare IT: Focus within healthcare sector, FHIR/TEFCA compliance, PHI scores
- Financial Services: Experience with financial services software, Advent products
- M&A Technology Consulting: Technology consolidation & divestiture, integration, workflow automation
- IT Operations: Server integration, networking, disaster recovery, hardware management, technical support, IT automation
- Business Management: P&L management, optimizing financial health, vendor relationship management
- Project Management: Collaborative teamwork, customer/industry insights, workflow development, client training, trusted advisor role
"""

def get_current_website_content():
    """Simulates fetching current website content for analysis."""
    print(f"[INFO] Fetching current content from {WEBSITE_URL}...")
    try:
        response = requests.get(WEBSITE_URL)
        response.raise_for_status() # Raise an exception for HTTP errors
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"[ERROR] Could not fetch website content: {e}")
        return ""

def analyze_seo_performance(website_content, previous_report=None):
    """Analyzes SEO performance and suggests improvements using an LLM."""
    print("[INFO] Analyzing SEO performance with LLM...")
    prompt = f"""
    You are an expert SEO consultant. Analyze the following website content and provide actionable SEO improvement suggestions.
    Focus on on-page SEO, content optimization, and keyword integration for the services offered:
    - AI-Ready Infrastructure Audit
    - FHIR/TEFCA 90-Day Sprint
    - Technology Consolidation & Divestiture

    Consider the target keywords based on the services and the user's professional profile:
    'AI infrastructure consulting', 'healthcare IT consulting', 'FHIR consulting', 'TEFCA compliance', 'cloud cost optimization', 'M&A technology integration', 'AI workload optimization', 'Azure migration', 'cybersecurity consulting', 'data privacy compliance', 'financial services technology', 'IT due diligence', 'digital transformation strategy'.

    User's Professional Profile (for expertise alignment):
    ---
    {USER_PROFILE}
    ---

    Current Website Content (HTML/Text):
    ---
    {website_content}
    ---

    Previous SEO Report (if any):
    ---
    {previous_report or 'None'}
    ---

    Provide a detailed report including:
    1.  **Summary of Current SEO Status**
    2.  **Recommended On-Page Optimizations** (Title, Meta Description, H1s, Content - specifically aligning with user's expertise)
    3.  **Content Enhancement Suggestions** (New blog topics, case studies, updates to existing content - leveraging user's specific skills)
    4.  **Technical SEO Recommendations** (if any, based on content structure)
    5.  **Keyword Opportunities** (New keywords to target or existing ones to strengthen, directly related to user's profile)
    6.  **Actionable Steps** (Specific changes to make to the website files)

    Format the output as a JSON object with keys: 'summary', 'on_page_optimizations', 'content_enhancements', 'technical_seo', 'keyword_opportunities', 'actionable_steps'.
    """

    try:
        response = client.chat.completions.create(
            model="gemini-2.5-flash", # Using a fast, cost-effective model for this task
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": "You are an expert SEO consultant providing actionable advice."},
                {"role": "user", "content": prompt}
            ]
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        print(f"[ERROR] LLM analysis failed: {e}")
        return {"error": str(e)}

def apply_improvements(actionable_steps):
    """Simulates applying improvements to the website files."""
    print("[INFO] Simulating application of improvements...")
    # In a real scenario, this would involve modifying files in IMPROVED_REACT_APP_PATH
    # and then rebuilding/deploying.
    # For this simulation, we'll just print the steps.
    for step in actionable_steps:
        print(f"  - {step}")
    print("[INFO] Improvements simulated. Manual review and application required.")

def main():
    print("Starting Mobtronic LLC Continuous SEO Improvement Agent...")

    # 1. Get current website content
    website_content = get_current_website_content()
    if not website_content:
        print("[ERROR] Cannot proceed without website content. Exiting.")
        return

    # 2. Load previous SEO report if available
    previous_report_path = os.path.join(SEO_REPORTS_DIR, "latest_seo_report.json")
    previous_report = None
    if os.path.exists(previous_report_path):
        with open(previous_report_path, "r") as f:
            previous_report = f.read()

    # 3. Analyze SEO performance using LLM
    seo_analysis = analyze_seo_performance(website_content, previous_report)

    if "error" in seo_analysis:
        print(f"[ERROR] SEO analysis failed: {seo_analysis['error']}. Exiting.")
        return

    # 4. Save the new SEO report
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    report_filename = os.path.join(SEO_REPORTS_DIR, f"seo_report_{timestamp}.json")
    with open(report_filename, "w") as f:
        json.dump(seo_analysis, f, indent=2)
    print(f"[INFO] SEO analysis report saved to {report_filename}")

    # Update latest report symlink/file
    with open(previous_report_path, "w") as f:
        json.dump(seo_analysis, f, indent=2)

    # 5. Print actionable steps
    print("\n--- Actionable SEO Improvement Steps ---")
    if seo_analysis.get("actionable_steps"):
        apply_improvements(seo_analysis["actionable_steps"])
    else:
        print("No specific actionable steps were provided by the LLM.")

    print("\nMobtronic LLC Continuous SEO Improvement Agent finished its daily run.")
    print("Review the generated report and apply changes manually or via deployment script.")

if __name__ == "__main__":
    main()

