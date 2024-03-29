const commonWords = [
    "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", 
    "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", 
    "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", 
    "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", 
    "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", 
    "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", 
    "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", 
    "find", "long", "down", "day", "did", "get", "come", "made", "may", "part","over", "new", "work", "know", "give", "take", "most", "good", "only", "year", "some", "think",
    "also", "after", "use", "two", "how", "our", "want", "way", "look", "first", "also", "because",
    "day", "more", "those", "want", "here", "thing", "through", "back", "even", "off", "need",
    "while", "just", "right", "tell", "much", "before", "great", "same", "too", "mean", "old", "any",
    "life", "well", "own", "both", "under", "never", "place", "again", "little", "where", "after",
    "case", "most", "week", "company", "where", "system", "each", "right", "program", "hear", "so",
    "question", "during", "play", "government", "run", "small", "number", "off", "always", "move",
    "like", "night", "live", "Mr", "point", "believe", "hold", "today", "bring", "happen", "next",
    "without", "before", "large", "all", "million", "must", "home", "under", "water", "room", "write",
    "mother", "area", "national", "money", "story", "young", "fact", "month", "different", "lot",
    "right", "study", "book", "eye", "job", "word", "though", "business", "issue", "side", "kind",
    "four", "head", "far", "black", "long", "both", "little", "house", "yes", "since", "provide",
    "service", "around", "friend", "important", "father", "sit", "away", "until", "power", "hour",
    "game", "often", "yet", "line", "political", "end", "among", "ever", "stand", "bad", "lose",
    "however", "member", "pay", "law", "meet", "car", "city", "almost", "include", "continue", "set",
    "later", "community", "much", "name", "five", "once", "white", "least", "president", "learn",
    "real", "change", "team", "minute", "best", "several", "idea", "kid", "body", "information",
    "nothing", "ago", "right", "lead", "social", "understand", "whether", "back", "watch", "together",
    "follow", "around", "parent", "only", "stop", "face", "anything", "create", "public", "already",
    "speak", "others", "read", "level", "allow", "add", "office", "spend", "door", "health", "person",
    "art", "school", "important", "every", "large", "available", "popular", "able", "basic", "known", "various",
    "difficult", "several", "united", "historical", "hot", "useful", "mental", "scared", "additional",
    "emotional", "old", "political", "similar", "healthy", "financial", "medical", "traditional", "federal",
    "entire", "strong", "actual", "significant", "successful", "electrical", "expensive", "pregnant",
    "intelligent", "interesting", "poor", "happy", "responsible", "cute", "helpful", "recent", "willing",
    "nice", "wonderful", "impossible", "serious", "huge", "rare", "technical", "typical", "competitive",
    "critical", "electronic", "immediate", "aware", "educational", "environmental", "global", "legal",
    "relevant", "accurate", "capable", "dangerous", "dramatic", "efficient", "powerful", "foreign",
    "hungry", "practical", "psychological", "severe", "suitable", "numerous", "sufficient", "unusual",
    "consistent", "cultural", "existing", "famous", "pure", "afraid", "obvious", "careful", "latter",
    "unhappy", "acceptable", "aggressive", "boring", "distinct", "eastern", "logical", "reasonable",
    "strict", "administrative", "automatic", "civil", "former", "massive", "southern", "unfair", "visible",
    "alive", "angry", "desperate", "exciting", "friendly", "lucky", "realistic", "sorry", "ugly", "unlikely",
    "anxious", "comprehensive", "curious", "impressive", "informal", "inner", "pleasant", "sexual",
    "sudden", "terrible", "unable", "weak", "wooden", "asleep", "confident", "conscious", "decent",
    "embarrassed", "guilty", "lonely", "mad", "nervous", "odd", "remarkable", "substantial", "suspicious",
    "tall", "tiny", "more", "some", "one", "all", "many", "most", "other", "such", "even", "new", "just",
    "good", "any", "each", "much", "own", "great", "another", "same", "few", "free", "right", "still",
    "best", "public", "human", "both", "local", "sure", "better", "general", "specific", "enough", "long",
    "small", "less", "high", "certain", "little", "common", "next", "simple", "hard", "past", "big", "possible",
    "particular", "real", "major", "personal", "current", "national", "full", "special", "easy", "clear",
    "likely", "short", "single", "medical", "current", "wrong", "private", "past", "foreign", "fine",
    "common", "poor", "natural", "significant", "similar", "hot", "dead", "central", "happy", "serious",
    "ready", "simple", "left", "physical", "general", "environmental", "financial", "blue", "democratic",
    "dark", "various", "entire", "close", "legal", "religious", "cold", "final", "main", "green", "nice",
    "huge", "popular", "traditional", "cultural"
];

export default commonWords;