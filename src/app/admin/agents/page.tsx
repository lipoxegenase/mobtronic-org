'use client';
import { useState } from 'react';

export default function AgentDashboard() {
  const [topic, setTopic] = useState('');
  const [brief, setBrief] = useState('');
  const [facts, setFacts] = useState('');
  const [draft, setDraft] = useState('');
  const [finalArticle, setFinalArticle] = useState('');
  const [feedback, setFeedback] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Tabs
  const [activeTab, setActiveTab] = useState<'workflow' | 'rag_editor'>('workflow');
  
  // RAG Editor State
  const [ragCollections, setRagCollections] = useState<any>({});
  const [activeCollection, setActiveCollection] = useState('mobtronic_resources');
  const [ragItems, setRagItems] = useState<any[]>([]);
  const [newRagTitle, setNewRagTitle] = useState('');
  const [newRagContent, setNewRagContent] = useState('');

  const fetchRagCollections = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/rag/collections');
      const data = await res.json();
      if (data.status === 'success') setRagCollections(data.result);
    } catch (e) { console.error(e); }
  };

  const fetchRagItems = async (collectionName: string) => {
    try {
      const res = await fetch(`http://localhost:8000/api/rag/collection/${collectionName}`);
      const data = await res.json();
      if (data.status === 'success') setRagItems(data.result);
    } catch (e) { console.error(e); }
  };

  const addRagItem = async () => {
    if (!newRagContent) return;
    try {
      await fetch(`http://localhost:8000/api/rag/collection/${activeCollection}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newRagTitle, content: newRagContent }),
      });
      setNewRagTitle('');
      setNewRagContent('');
      fetchRagItems(activeCollection);
      fetchRagCollections();
    } catch (e) { console.error(e); }
  };

  const deleteRagItem = async (docId: string) => {
    try {
      await fetch(`http://localhost:8000/api/rag/collection/${activeCollection}/${docId}`, {
        method: 'DELETE',
      });
      fetchRagItems(activeCollection);
      fetchRagCollections();
    } catch (e) { console.error(e); }
  };

  const runAgent = async (endpoint: string, payload: any, setter: (val: string) => void, nextStep: number) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/api/agents/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setter(data.result);
      setStep(nextStep);
      setFeedback(''); // clear feedback for next step
    } catch (error) {
      console.error(error);
      alert('Error communicating with Agent API. Make sure run_api.sh is running.');
    }
    setLoading(false);
  };

  const handlePublish = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, content: finalArticle }),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert(`Article published successfully at /blog/${data.slug}!`);
        // Reset dashboard for the next article
        setTopic('');
        setBrief('');
        setFacts('');
        setDraft('');
        setFinalArticle('');
        setStep(1);
      } else {
        alert(`Error publishing: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to publish the article.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-10 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-foreground">Multi-Agent Control Room</h1>
        <div className="flex bg-muted/50 p-1 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'workflow' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setActiveTab('workflow')}
          >
            Workflow
          </button>
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'rag_editor' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => {
              setActiveTab('rag_editor');
              fetchRagCollections();
              fetchRagItems(activeCollection);
            }}
          >
            RAG Database Editor
          </button>
        </div>
      </div>
      
      {activeTab === 'workflow' && (
        <>
          {/* Progress Bar */}
      <div className="flex justify-between mb-12 relative border-b border-border pb-4">
        {['Strategy', 'Research', 'Writing', 'Editing'].map((s, i) => (
          <div key={s} className={`text-center flex-1 font-semibold ${step >= i + 1 ? 'text-primary' : 'text-muted-foreground'}`}>
            {i + 1}. {s}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Output Display */}
        <div className="bg-card border border-border rounded-xl p-6 h-[600px] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Agent Output</h2>
          {step === 1 && <p className="text-muted-foreground">Waiting for topic input...</p>}
          {step === 2 && <pre className="whitespace-pre-wrap text-sm">{brief}</pre>}
          {step === 3 && <pre className="whitespace-pre-wrap text-sm">{facts}</pre>}
          {step === 4 && <pre className="whitespace-pre-wrap text-sm">{draft}</pre>}
          {step === 5 && <pre className="whitespace-pre-wrap text-sm">{finalArticle}</pre>}
        </div>

        {/* Right Column: Human-In-The-Loop Controls */}
        <div className="bg-muted/30 border border-border rounded-xl p-6 flex flex-col justify-between h-[600px]">
          <div>
            <h2 className="text-xl font-bold mb-4">Command & Feedback</h2>
            
            {step === 1 && (
              <div>
                <label className="block text-sm font-medium mb-2">Topic / Goal</label>
                <input 
                  type="text" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-background border border-input rounded p-2 mb-4" 
                  placeholder="e.g. Cloud Optimization in Healthcare"
                />
                <button 
                  onClick={() => runAgent('strategy', { topic }, setBrief, 2)}
                  disabled={loading}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold w-full"
                >
                  {loading ? 'Strategist is thinking...' : 'Deploy Strategy Agent'}
                </button>
              </div>
            )}

            {step > 1 && step < 5 && (
              <div>
                <label className="block text-sm font-medium mb-2">Feedback for the next agent (or for revisions)</label>
                <textarea 
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-32 bg-background border border-input rounded p-2 mb-4 resize-none" 
                  placeholder="e.g. Make sure to emphasize the cost savings of TEFCA integration..."
                />
              </div>
            )}
          </div>

          <div className="flex gap-4">
            {step === 2 && (
              <button 
                onClick={() => runAgent('research', { brief, feedback }, setFacts, 3)}
                disabled={loading}
                className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold w-full"
              >
                {loading ? 'Researcher is digging...' : 'Approve Brief & Deploy Researcher'}
              </button>
            )}
            
            {step === 3 && (
              <button 
                onClick={() => runAgent('write', { brief, facts, feedback }, setDraft, 4)}
                disabled={loading}
                className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold w-full"
              >
                {loading ? 'Writer is drafting...' : 'Approve Facts & Deploy Writer'}
              </button>
            )}

            {step === 4 && (
              <button 
                onClick={() => runAgent('edit', { facts, draft, feedback }, setFinalArticle, 5)}
                disabled={loading}
                className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold w-full"
              >
                {loading ? 'Editor is polishing...' : 'Approve Draft & Deploy Editor'}
              </button>
            )}

            {step === 5 && (
              <button 
                onClick={handlePublish}
                className="bg-green-600 text-white px-4 py-2 rounded font-semibold w-full hover:bg-green-500 transition-colors"
              >
                Publish to Blog
              </button>
            )}
          </div>
        </div>

      </div>
        </>
      )}

      {activeTab === 'rag_editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar: Collections */}
          <div className="lg:col-span-1 bg-card border border-border rounded-xl p-6 h-[600px] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Collections</h2>
            <div className="flex flex-col gap-2">
              {['mobtronic_resources', 'generated_articles', 'reviewer_feedback'].map((col) => (
                <button
                  key={col}
                  onClick={() => {
                    setActiveCollection(col);
                    fetchRagItems(col);
                  }}
                  className={`text-left px-4 py-3 rounded-lg border transition-colors ${
                    activeCollection === col 
                      ? 'border-primary bg-primary/10 text-primary font-medium' 
                      : 'border-border hover:bg-muted'
                  }`}
                >
                  <div className="truncate">{col.replace('_', ' ')}</div>
                  <div className="text-xs mt-1 text-muted-foreground">
                    {ragCollections[col] !== undefined ? `${ragCollections[col]} items` : 'Loading...'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Middle: Items List */}
          <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 h-[600px] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Items in {activeCollection.replace('_', ' ')}</h2>
            <div className="space-y-4">
              {ragItems.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No items found in this collection.</p>
              ) : (
                ragItems.map((item) => (
                  <div key={item.id} className="p-4 border border-border rounded-lg bg-background">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm truncate max-w-[80%]">
                        {item.metadata?.title || item.metadata?.source || 'Untitled Item'}
                      </h3>
                      <button 
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this item from the RAG?')) {
                            deleteRagItem(item.id);
                          }
                        }}
                        className="text-red-500 hover:text-red-700 text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2 font-mono truncate">{item.id}</div>
                    <p className="text-sm text-foreground line-clamp-3 overflow-hidden text-ellipsis leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right: Add New */}
          <div className="lg:col-span-1 bg-muted/30 border border-border rounded-xl p-6 h-[600px] flex flex-col">
            <h2 className="text-xl font-bold mb-4">Add Manual Entry</h2>
            <div className="flex-grow flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title / Reference Name</label>
                <input 
                  type="text" 
                  value={newRagTitle}
                  onChange={(e) => setNewRagTitle(e.target.value)}
                  className="w-full bg-background border border-input rounded p-2 text-sm" 
                  placeholder="e.g. New Cloud Architecture Pattern"
                />
              </div>
              <div className="flex-grow flex flex-col">
                <label className="block text-sm font-medium mb-2">Context / Content</label>
                <textarea 
                  value={newRagContent}
                  onChange={(e) => setNewRagContent(e.target.value)}
                  className="w-full flex-grow bg-background border border-input rounded p-2 text-sm resize-none" 
                  placeholder="Paste the text or markdown you want the agents to read..."
                />
              </div>
              <button 
                onClick={addRagItem}
                disabled={!newRagContent}
                className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold w-full disabled:opacity-50"
              >
                Add to Knowledge Base
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
