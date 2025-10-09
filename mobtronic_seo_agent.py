#!/usr/bin/env python3
"""
Mobtronic.org SEO Improvement Agent

This script analyzes the mobtronic.org website content, identifies SEO improvement
opportunities, and generates detailed reports with actionable recommendations.

Based on the KatalystVC Daily SEO Agent playbook.
"""

import os
import json
import requests
from datetime import datetime
from openai import OpenAI

# Configuration
WEBSITE_URL = "https://mobtronic.org"
REPORTS_DIR = "seo_reports"
TARGET_KEYWORDS = [
    "AI infrastructure consulting",
    "healthcare IT consulting",
    "FHIR consulting",
    "TEFCA compliance",
    "cloud cost optimization",
    "M&A technology integration",
    "fractional CTO",
    "technology strategy",
    "AI-ready infrastructure",
    "healthcare interoperability"
]

def fetch_website_content(url):
    """Fetch the current content of the website."""
    print(f"Fetching content from {url}...")
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"Error fetching website content: {e}")
        return None

def analyze_seo_with_llm(content, keywords):
    """Analyze content using LLM to identify SEO improvement opportunities."""
    print("Analyzing content with Gemini 2.5 Flash...")
    
    client = OpenAI()
    
    prompt = f"""You are an expert SEO analyst. Analyze the following website content and provide detailed SEO improvement recommendations.

Website Content:
{content[:10000]}  # Limit content to avoid token limits

Target Keywords:
{', '.join(keywords)}

Please analyze the content and provide:

1. **Current SEO Status**: Evaluate the current SEO implementation including:
   - Meta tags (title, description, keywords)
   - Content structure and headings
   - Keyword usage and density
   - Internal and external linking
   - Mobile responsiveness indicators
   - Page load performance indicators

2. **Keyword Analysis**: For each target keyword, assess:
   - Current presence and placement
   - Keyword density and natural integration
   - Opportunities for better keyword placement

3. **Content Quality Assessment**:
   - Content relevance and value
   - Readability and structure
   - Unique value proposition clarity
   - Call-to-action effectiveness

4. **Technical SEO Issues**:
   - Meta tag optimization opportunities
   - Schema markup recommendations
   - URL structure
   - Any technical issues detected

5. **Actionable Recommendations**: Provide specific, prioritized steps to improve SEO, including:
   - High priority (immediate impact)
   - Medium priority (important but not urgent)
   - Low priority (nice to have)

6. **Competitive Positioning**: Suggest how to differentiate from competitors in search results

Format your response as a structured analysis with clear sections and specific recommendations."""

    try:
        response = client.chat.completions.create(
            model="gemini-2.5-flash",
            messages=[
                {"role": "system", "content": "You are an expert SEO analyst specializing in technical consulting and B2B services websites."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=4000
        )
        
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error during LLM analysis: {e}")
        return None

def generate_seo_report(analysis, content_length):
    """Generate a structured SEO report in JSON format."""
    print("Generating SEO report...")
    
    timestamp = datetime.now().isoformat()
    
    report = {
        "timestamp": timestamp,
        "website": WEBSITE_URL,
        "target_keywords": TARGET_KEYWORDS,
        "content_length": content_length,
        "analysis": analysis,
        "metadata": {
            "agent_version": "1.0.0",
            "llm_model": "gemini-2.5-flash",
            "analysis_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
    }
    
    return report

def save_report(report):
    """Save the SEO report to the reports directory."""
    os.makedirs(REPORTS_DIR, exist_ok=True)
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{REPORTS_DIR}/seo_report_{timestamp}.json"
    
    print(f"Saving report to {filename}...")
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    return filename

def extract_actionable_steps(analysis):
    """Extract and format actionable steps from the analysis."""
    print("\n" + "="*80)
    print("ACTIONABLE SEO IMPROVEMENT STEPS")
    print("="*80 + "\n")
    
    # Print the full analysis for manual review
    print(analysis)
    
    print("\n" + "="*80)
    print("Manual intervention required to apply these changes to website files.")
    print("="*80 + "\n")

def main():
    """Main execution function."""
    print("="*80)
    print("MOBTRONIC.ORG SEO IMPROVEMENT AGENT")
    print("="*80 + "\n")
    
    # Step 1: Fetch website content
    content = fetch_website_content(WEBSITE_URL)
    if not content:
        print("Failed to fetch website content. Exiting.")
        return
    
    print(f"Successfully fetched {len(content)} characters of content.\n")
    
    # Step 2: Analyze content with LLM
    analysis = analyze_seo_with_llm(content, TARGET_KEYWORDS)
    if not analysis:
        print("Failed to analyze content. Exiting.")
        return
    
    print("Analysis completed successfully.\n")
    
    # Step 3: Generate report
    report = generate_seo_report(analysis, len(content))
    
    # Step 4: Save report
    filename = save_report(report)
    print(f"Report saved successfully: {filename}\n")
    
    # Step 5: Print actionable steps
    extract_actionable_steps(analysis)
    
    print(f"\nSEO analysis complete! Review the report at: {filename}")
    print("Next steps: Apply recommended changes to website files and redeploy.\n")

if __name__ == "__main__":
    main()

