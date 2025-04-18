import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, Edit3, CheckCircle, Lightbulb, Menu, Minus, X } from 'lucide-react';
import { Button } from './button';

const demoContent = [
  {
    id: 'note-taking',
    title: 'Smart note-taking',
    content: `# Project Meeting Notes
## Action Items
- [ ] Finish UI design by Friday
- [ ] Schedule follow-up with marketing
- [ ] Research competitor pricing

## Discussion Points
Today we discussed the timeline for the Q3 launch. The team agreed that we should focus on the core features first and then expand to additional platforms in Q4.

Key concerns:
1. Resource allocation
2. Marketing timeline
3. Customer feedback integration`,
    aiResponse: "I've analyzed your meeting notes. Here's a summary:\n\nThe team is planning a Q3 launch focusing on core features with Q4 expansion. Key action items include UI design completion, marketing follow-up, and competitor research. Main concerns are around resources, marketing timing, and customer feedback loops."
  },
  {
    id: 'organization',
    title: 'Auto-organization',
    content: `# Random Thoughts
- Should add more illustrations to the landing page
- Need to buy groceries tonight
- That article about machine learning was interesting
- Remember to call mom tomorrow
- Would be cool to add a dark mode toggle
- Schedule dentist appointment next month`,
    aiResponse: "I've organized your notes into categories:\n\n📋 **Work Tasks**\n- Add more illustrations to landing page\n- Add dark mode toggle\n\n🛒 **Personal Errands**\n- Buy groceries tonight\n- Call mom tomorrow\n- Schedule dentist appointment\n\n📚 **Interests**\n- Article about machine learning"
  },
  {
    id: 'questioning',
    title: 'Ask questions',
    content: `# Book Notes: Deep Work by Cal Newport
## Key Concepts
- Deep work: Professional activities performed in a state of distraction-free concentration
- Shallow work: Non-cognitively demanding, logistical tasks, often performed while distracted
- Attention residue: When switching tasks, attention remains partly stuck on the previous task
- The ability to perform deep work is becoming increasingly valuable in our economy
- At the same time, distractions are increasing, making deep work increasingly rare

## Strategies
1. Schedule deep work blocks
2. Embrace boredom to train focus
3. Quit social media or strictly limit usage
4. Drain the shallows (reduce shallow work)`,
    aiResponse: "Based on your notes on 'Deep Work' by Cal Newport, here are the key strategies for implementing deep work:\n\n1. **Schedule dedicated blocks** for deep work in your calendar\n2. **Embrace boredom** instead of constantly seeking stimulation to build focus\n3. **Limit or quit social media** to reduce distraction sources\n4. **Minimize shallow work** by eliminating or delegating low-value tasks\n\nNewport suggests that by protecting your capacity for deep work, you'll produce higher quality output and experience more meaningful satisfaction."
  }
];

export function InteractiveDemo() {
  const [selectedDemo, setSelectedDemo] = useState(demoContent[0]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typedResponse, setTypedResponse] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  // Handle demo selection
  const selectDemo = (demo: typeof demoContent[0]) => {
    setSelectedDemo(demo);
    setShowAnswer(false);
    setTypedResponse('');
  };

  // Handle question asking
  const askQuestion = () => {
    setIsTyping(true);
    setShowAnswer(true);
    setTypedResponse('');
    
    // Simulate typing effect for AI response
    let i = 0;
    const interval = setInterval(() => {
      if (i < selectedDemo.aiResponse.length) {
        setTypedResponse(prev => prev + selectedDemo.aiResponse.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);
    
    return () => clearInterval(interval);
  };

  // Set default questions based on demo
  useEffect(() => {
    const questions = {
      'note-taking': 'Summarize these meeting notes',
      'organization': 'Organize these random thoughts into categories',
      'questioning': 'What are the key strategies for deep work?'
    };
    setCurrentQuestion(questions[selectedDemo.id as keyof typeof questions]);
  }, [selectedDemo]);

  return (
    <motion.div 
      className="relative max-w-4xl mx-auto bg-black/70 rounded-xl overflow-hidden border border-white/10"
      initial={false}
      animate={isMinimized ? { height: '64px' } : { height: 'auto' }}
      transition={{ duration: 0.3 }}
    >
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-white font-medium">Notably Demo</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            size="sm" 
            variant="ghost"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 p-0"
          >
            {isMinimized ? <Minus className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
          </Button>
          <Button 
            size="sm" 
            variant="ghost"
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* App Content */}
      {!isMinimized && (
        <div className="flex flex-col md:flex-row h-[500px] max-h-[80vh]">
          {/* Sidebar */}
          <div className="w-full md:w-48 bg-black/50 border-r border-white/10 p-3 space-y-1 flex-shrink-0">
            {demoContent.map((demo) => (
              <button
                key={demo.id}
                className={`w-full px-3 py-2 rounded-lg text-left text-sm transition-colors ${
                  selectedDemo.id === demo.id
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => selectDemo(demo)}
              >
                {demo.title}
              </button>
            ))}
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Note Content */}
            <div className="flex-1 p-4 overflow-auto font-mono text-sm text-gray-300 whitespace-pre-wrap">
              {selectedDemo.content}
            </div>
            
            {/* Divider */}
            <div className="border-t border-white/10" />
            
            {/* AI Interaction Area */}
            <div className="p-4 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="bg-primary/20 h-7 w-7 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-3.5 w-3.5 text-primary" />
                </div>
                
                <div className="flex-1 flex">
                  <input
                    type="text"
                    value={currentQuestion}
                    onChange={(e) => setCurrentQuestion(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-l-md py-1.5 px-3 flex-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="Ask a question about this note..."
                  />
                  <Button
                    onClick={askQuestion}
                    className="rounded-l-none"
                    disabled={isTyping}
                  >
                    {isTyping ? (
                      <div className="flex items-center">
                        <div className="animate-pulse">Thinking</div>
                        <div className="flex ml-2">
                          <div className="h-1.5 w-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="h-1.5 w-1.5 bg-white rounded-full mx-1 animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="h-1.5 w-1.5 bg-white rounded-full animate-bounce"></div>
                        </div>
                      </div>
                    ) : (
                      <span>Ask</span>
                    )}
                  </Button>
                </div>
              </div>
              
              {/* AI Response */}
              <AnimatePresence>
                {showAnswer && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-white/5 rounded-lg border border-white/10 p-4 text-sm text-gray-200"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium">Notably AI</span>
                    </div>
                    <div className="pl-6 whitespace-pre-line">
                      {typedResponse}
                      {isTyping && <span className="ml-1 animate-pulse">|</span>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}