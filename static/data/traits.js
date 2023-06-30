var traits = [
  {
    "name": "Anatomist",
    "type": "Basic",
    "subtype": "Combat",
    "description": "You have studied the workings of anatomy, either as a student at university or as an apprentice mortician or necromancer. You know where to aim your blows to strike vital organs and you gain a +1 trait bonus on all rolls made to confirm critical hits."
  },
  {
    "name": "Armor Expert",
    "type": "Basic",
    "subtype": "Combat",
    "description": "You have worn armor as long as you can remember, either as part of your training to become a knight’s squire or simply because you were seeking to emulate a hero. Your childhood armor wasn’t the real thing as far as protection, but it did encumber you as much as real armor would have, and you’ve grown used to moving in such suits with relative grace. When you wear armor of any sort, reduce that suit’s armor check penalty by 1, to a minimum check penalty of 0."
  },
  {
    "name": "Bullied",
    "type": "Basic",
    "subtype": "Combat",
    "description": "You were bullied often as a child, and you are now constantly ready to defend yourself with your fists when an enemy comes near. You gain a +1 trait bonus on attacks of opportunity attack rolls made with unarmed strikes. Note that this trait does not grant the ability to make attacks of opportunity with your unarmed strikes—you’ll need to take a level of monk, the Improved Unarmed Strike feat, or some other similar power to gain the use of this character trait. However, that doesn’t prevent you from selecting this trait. You’ll simply not be able to make use of it until a later point if you do."
  },
  {
    "name": "Courageous",
    "type": "Basic",
    "subtype": "Combat",
    "description": "Your childhood was brutal, yet you persevered primarily through force of will and the hope that no matter how hard things might get, as long as you kept a level head you’d make it through. You gain a +2 trait bonus on saving throws against fear effects."
  },
  {
    "name": "Deft Dodger",
    "type": "Basic",
    "subtype": "Combat",
    "description": "Growing up in a rough neighborhood or a dangerous environment has honed your senses. You gain a +1 trait bonus on Ref lex saves."
  },
  {
    "name": "Dirty Fighter",
    "type": "Basic",
    "subtype": "Combat",
    "description": "You wouldn’t have lived to make it out of childhood without the aid of a sibling, friend, or companion on whom you could always count to distract your enemies long enough to do a little bit more damage than normal. That companion may be another PC or an NPC (who may even be recently departed from your side). When you hit a foe you are f lanking, you deal an additional 1 point of damage (this damage is added to your base damage, and is multiplied on a critical hit). This additional damage is a trait bonus."
  },
  {
    "name": "Fencer",
    "type": "Basic",
    "subtype": "Combat",
    "description": "You trained long hours as a youth with blades, either taking lessons in the genteel art of fencing from tutors paid for by your parents or by being taken under the wing of a disenfranchised fencer who may have turned to a life of crime. You gain a +1 trait bonus on attacks of opportunity made with daggers, swords, and similar bladed weapons."
  },
  {
    "name": "Killer",
    "type": "Basic",
    "subtype": "Combat",
    "description": "You made your first kill at a very young age and found the task of war or murder to your liking. You either take particular pride in a well-placed blow, or vile pleasure in such a strike as you twist the blade to maximize the pain. You deal additional damage equal to your weapon’s critical hit modifier when you score a successful critical hit with a weapon; this additional damage is added to the final total, and is not multiplied by the critical hit multiple itself. This extra damage is a trait bonus."
  },
  {
    "name": "Reactionary",
    "type": "Basic",
    "subtype": "Combat",
    "description": "You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly. You gain a +2 trait bonus on Initiative checks."
  },
  {
    "name": "Resilient",
    "type": "Basic",
    "subtype": "Combat",
    "description": "Growing up in a violent neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources. You’ve built up your mettle as a result, and gain a +1 trait bonus on Fortitude saves."
  },
  {
    "name": "Birthmark",
    "type": "Basic",
    "subtype": "Faith",
    "description": "You were born with a strange birthmark that looks very similar to the holy symbol of the god you chose to worship later in life. This birthmark can serve you as a divine focus for casting spells, and, as a physical manifestation of your faith, increases your devotion to your god—you gain a +2 trait bonus on all saving throws against charm and compulsion effects as a result."
  },
  {
    "name": "Caretaker",
    "type": "Basic",
    "subtype": "Faith",
    "description": "As the child of an herbalist or an assistant in a temple infirmary, you often had to assist in tending to the sick and wounded. You gain a +1 trait bonus on Heal checks, and Heal is always a class skill for you."
  },
  {
    "name": "Child of the Temple",
    "type": "Basic",
    "subtype": "Faith",
    "description": "You have long served at a temple in a city, and not only did you pick up on many of the nobility’s customs, you spent much time in the temple libraries studying your faith. You gain a +1 trait bonus on Knowledge (nobility) and Knowledge (religion) checks, and one of these skills (your choice) is always a class skill for you."
  },
  {
    "name": "Devotee of the Green",
    "type": "Basic",
    "subtype": "Faith",
    "description": "Your faith in the natural world or one of the gods of nature makes it easy for you to pick up on related concepts. You gain a +1 trait bonus on Knowledge (geography) and Knowledge (nature) checks, and one of these skills (your choice) is always a class skill for you."
  },
  {
    "name": "Ease of Faith",
    "type": "Basic",
    "subtype": "Faith",
    "description": "Your mentor, the person who invested your faith in you from an early age, took steps to ensure that you understood that what powers your divine magic is no different than that which powers the magic of other religions. This philosophy makes it easier for you to interact with others who may not share your views. You gain a +1 bonus on Diplomacy checks, and Diplomacy is always a class skill for you."
  },
  {
    "name": "History of Heresy",
    "type": "Basic",
    "subtype": "Faith",
    "description": "You were raised with heretical views that have made it not only difficult for you to accept most religious beliefs, but you also have had to live with the fact that you or those you love were often treated as pariahs. As a result, you have turned your back on religious teachings, and as long as you do not possess any levels in a class that grants divine spellcasting power, you gain a +1 trait bonus on all saving throws made against divine spells."
  },
  {
    "name": "Indomitable Faith",
    "type": "Basic",
    "subtype": "Faith",
    "description": "You were born in a region where your faith was not popular, yet you never abandoned it. Your constant struggle to maintain your own faith has bolstered your drive; you gain a +1 trait bonus on Will saves as a result."
  },
  {
    "name": "Sacred Conduit",
    "type": "Basic",
    "subtype": "Faith",
    "description": "Your birth was particularly painful and difficult for your mother, who needed potent divine magic to ensure you survived; your mother may or may not have survived. In any event, the magic infused you from an early age, and you now channel divine energy with greater ease than most. Whenever you channel energy, you gain a +1 trait bonus to the save DC of your channeled energy."
  },
  {
    "name": "Sacred Touch",
    "type": "Basic",
    "subtype": "Faith",
    "description": "You were exposed to a potent source of positive energy as a child, perhaps by being born under the right cosmic sign, or maybe because one of your parents was a gifted healer. As a standard action, you may automatically stabilize a dying creature merely by touching it."
  },
  {
    "name": "Scholar of the Great Beyond",
    "type": "Basic",
    "subtype": "Faith",
    "description": "Your great interests as a child did not lie with current events or the mundane— you have always felt out of place, as if you were born in the wrong era. You take to philosophical discussions of the Great Beyond and of historical events with ease. You gain a +1 trait bonus on Knowledge (history) and Knowledge (planes) checks, and one of these skills (your choice) is always a class skill for you."
  },
  {
    "name": "Classically Schooled",
    "type": "Basic",
    "subtype": "Magic",
    "description": "Your apprenticeship or early education was particularly focused on the direct application of magic. You gain a +1 trait bonus on Spellcraft checks, and Spellcraft is always a class skill for you."
  },
  {
    "name": "Dangerously Curious",
    "type": "Basic",
    "subtype": "Magic",
    "description": "You have always been intrigued by magic, possibly because you were the child of a magician or priest. You often snuck into your parent’s laboratory or shrine to tinker with spell components and magic devices, and often caused quite a bit of damage and headaches for your parent as a result. You gain a +1 bonus on Use Magic Device checks, and Use Magic Device is always a class skill for you."
  },
  {
    "name": "Focused Mind",
    "type": "Basic",
    "subtype": "Magic",
    "description": "Your childhood was either dominated by lessons of some sort (be they musical or academic) or by a horrible home life that encouraged your ability to block out distractions to focus on the immediate task at hand. You gain a +2 trait bonus on concentration checks."
  },
  {
    "name": "Gifted Adept",
    "type": "Basic",
    "subtype": "Magic",
    "description": "Your interest in magic was inspired by witnessing a spell being cast in a particularly dramatic method, perhaps even one that affected you physically or spiritually. This early exposure to magic has made it easier for you to work similar magic on your own. Pick one spell when you choose this trait—from this point on, whenever you cast that spell, its effects manifest at +1 caster level."
  },
  {
    "name": "Hedge Magician",
    "type": "Basic",
    "subtype": "Magic",
    "description": "You apprenticed for a time to a craftsman who often built magic items, and he taught you many handy shortcuts and cost-saving techniques. Whenever you craft a magic item, you reduce the cost of gp required to make the item by 5%."
  },
  {
    "name": "Magical Knack",
    "type": "Basic",
    "subtype": "Magic",
    "description": "You were raised, either wholly or in part, by a magical creature, either after it found you abandoned in the woods or because your parents often left you in the care of a magical minion. This constant exposure to magic has made its mysteries easy for you to understand, even when you turn your mind to other devotions and tasks. Pick a class when you gain this trait—your caster level in that class gains a +2 trait bonus as long as this bonus doesn’t increase your caster level higher than your current Hit Dice."
  },
  {
    "name": "Magical Lineage",
    "type": "Basic",
    "subtype": "Magic",
    "description": "One of your parents was a gifted spellcaster who not only used metamagic often, but developed many magical items and perhaps even a new spell or two—and you have inherited a fragment of this greatness. Pick one spell when you choose this trait. When you apply metamagic feats to this spell, treat its actual level as 1 lower for determining the spell’s f inal adjusted level."
  },
  {
    "name": "Magical Talent",
    "type": "Basic",
    "subtype": "Magic",
    "description": "Either from inborn talent, whimsy of the gods, or obsessive study of strange tomes, you have mastered the use of a cantrip. Choose a 0-level spell. You may cast that spell once per day as a spell-like ability. This spell-like ability is cast at your highest caster level gained; if you have no caster level, it functions at CL 1st. The spell-like ability’s save DC is Charisma-based."
  },
  {
    "name": "Mathematical Prodigy",
    "type": "Basic",
    "subtype": "Magic",
    "description": "Mathematics has always come easily for you, and you have always been able to “see the math” in the physical and magical world. You gain a +1 bonus on Knowledge (arcana) and Knowledge (engineering) checks, and one of these skills (your choice) is always a class skill for you."
  },
  {
    "name": "Skeptic",
    "type": "Basic",
    "subtype": "Magic",
    "description": "Growing up, you were always around magical effects to the extent that you realized that much of it was smoke and mirrors. You gain a +2 trait bonus on all saving throws against illusions."
  },
  {
    "name": "Adopted",
    "type": "Basic",
    "subtype": "Social",
    "description": "You were adopted and raised by someone not of your actual race, and raised in a society not your own. As a result, you picked up a race trait from your adoptive parents and society, and may immediately select a race trait from your adoptive parents’ race. Race traits can be found in Pathfinder Companion products—if you don’t have access to a selection of race traits, it’s best to simply pick a different social feat."
  },
  {
    "name": "Bully",
    "type": "Basic",
    "subtype": "Social",
    "description": "You grew up in an environment where the meek were ignored and you often had to resort to threats or violence to be heard. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you."
  },
  {
    "name": "Canter",
    "type": "Basic",
    "subtype": "Social",
    "description": "You grew up among thieves and scoundrels, and their unusual speech patterns and turns of phrase don’t phase you in the slightest today as a result. Anyone who attempts to use Bluff to deliver a secret message to you gains a +5 bonus on his Bluff check. When you attempt to intercept a secret message using Sense Motive, you gain a +5 trait bonus on the attempt."
  },
  {
    "name": "Charming",
    "type": "Basic",
    "subtype": "Social",
    "description": "Blessed with good looks, you’ve come to depend on the fact that others find you attractive. You gain a +1 trait bonus when you use Bluff or Diplomacy on a character that is (or could be) sexually attracted to you, and a +1 trait bonus to the save DC of any language-dependent spell you cast on such characters or creatures."
  },
  {
    "name": "Child of the Streets",
    "type": "Basic",
    "subtype": "Social",
    "description": "You grew up on the streets of a large city, and as a result you have developed a knack for picking pockets and hiding small objects on your person. You gain a +1 trait bonus on Sleight of Hand checks, and Sleight of Hand is always a class skill for you."
  },
  {
    "name": "Fast-Talker",
    "type": "Basic",
    "subtype": "Social",
    "description": "You had a knack at getting yourself into trouble as a child, and as a result developed a silver tongue at an early age. You gain a +1 trait bonus on Bluff checks, and Bluff is always a class skill for you."
  },
  {
    "name": "Natural-Born Leader",
    "type": "Basic",
    "subtype": "Social",
    "description": "You’ve always found yourself in positions where others look up to you as a leader, and you can distinctly remember an event from your early childhood where you led several other children to accomplish a goal that each of you individually could not. All cohorts, followers, or summoned creatures under your leadership gain a +1 morale bonus on Will saves to avoid mind-affecting effects. If you ever take the Leadership feat, you gain a +1 trait bonus to your Leadership score."
  },
  {
    "name": "Poverty-Stricken",
    "type": "Basic",
    "subtype": "Social",
    "description": "Your childhood was tough, and your parents had to make every copper piece count. Hunger was your constant companion, and you often had to live off the land or sleep in the wild. You gain a +1 bonus to Survival checks, and Survival is always a class skill for you."
  },
  {
    "name": "Rich Parents",
    "type": "Basic",
    "subtype": "Social",
    "description": "You were born into a rich family, perhaps even the nobility, and even though you turned to a life of adventure anyway, you enjoyed a one-time benefit to your initial finances and your starting cash increases to 900 gp."
  },
  {
    "name": "Suspicious",
    "type": "Basic",
    "subtype": "Social",
    "description": "You discovered at an early age that someone you trusted, perhaps an older sibling or a parent, had lied to you, and often, about something you had taken for granted, leaving you quick to question the claims of others. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is always a class skill for you."
  },
    {
        name: "Arcane Archivist",
        type: "Faction",
        subtype: "Dark Archive",
        description: "You have spent years handling magic items and know how to test their functions while avoiding catastrophic results. You gain a +1 trait bonus on Use Magic Device checks, and this skill becomes a class skill for you."
    },
    {
        name: "Devil’s Mark",
        type: "Faction",
        subtype: "Dark Archive",
        description: "You bear the stain of a higher fiend upon you, and any evil creature who sees it may think twice before crossing you. You gain a +2 trait bonus on all Bluff, Diplomacy, Intimidate, and Sense Motive checks when dealing with outsiders of the evil subtype."
    },
    {
        name: "Librarian",
        type: "Faction",
        subtype: "Dark Archive",
        description: "You are trained to manage and maintain books, and you find it easy to procure information from tomes. You gain a +1 bonus on Linguistics or Profession (librarian) checks, and one of these skills (your choice) becomes a class skill for you. Once per day when you would gain a bonus on a skill check from reading a book, you can increase that bonus by 1."
    },
    {
        name: "Master of Pentacles",
        type: "Faction",
        subtype: "Dark Archive",
        description: "Your many years spent studying the art of summoning have given you a unique knowledge of this subtle and complicated discipline. Once per day, when casting a spell of the Conjuration school, treat your caster level as two higher when determining the spell’s duration."
    },
    {
        name: "Soul Drinker",
        type: "Faction",
        subtype: "Dark Archive",
        description: "There is a dark hunger in you that rejoices when you or an ally slays a foe. Once per day when an enemy creature is killed, you may, as an immediate action, gain a number of temporary hit points equal to the slain foe’s Hit Dice. These temporary hit points last for 1 minute. This is a supernatural ability."
    },
    {
        name: "Gold Finger",
        type: "Faction",
        subtype: "The Exchange",
        description: "Your family comes from a long, proud tradition of housebreaking and thievery. You are a strong part of that tradition. You gain a +1 trait bonus on Disable Device and Sleight of Hand checks, and one of these skills (your choice) becomes a class skill for you."
    },
    {
        name: "Greasy Palm",
        type: "Faction",
        subtype: "The Exchange",
        description: "You know how to get people to do what you want with little effort. When bribing an NPC, you pay 10% less than a character without this trait would, garnering the same results."
    },
    {
        name: "Smuggler",
        type: "Faction",
        subtype: "The Exchange",
        description: "Whether you’re carrying illegal contraband or simply regulated products, you have a knack for sneaking goods past watchful eyes. You gain a +3 bonus on Sleight of Hand checks made to hide an object, and Sleight of Hand is a class skill for you."
    },
    {
        name: "Tireless",
        type: "Faction",
        subtype: "The Exchange",
        description: "You are accustomed to working long hours and weathering difficult conditions just to get the job done. You gain a +2 trait bonus on Constitution checks made to resist nonlethal damage from swimming, forced marches, starvation, thirst, and hot and cold environments. In addition, you gain 1 hit point."
    },
    {
        name: "Upstanding",
        type: "Faction",
        subtype: "The Exchange",
        description: "Your preferred means of doing business involves giving your clients a fair deal and winning their continued business and good will. You gain a +1 trait bonus on Diplomacy and Sense Motive checks, and one of these skills (your choice) becomes a class skill for you."
    },
    {
        name: "Insider Knowledge",
        type: "Faction",
        subtype: "Grand Lodge",
        description: "Venture-Captain Valsin likes to keep abreast of situations within the Pathfinder Society, and you do your best to emulate him. Choose either Diplomacy or Knowledge (local). You gain a +1 trait bonus on all checks for the chosen skill, and the chosen skill becomes a class skill for you."
    },
    {
        name: "Loyalty",
        type: "Faction",
        subtype: "Grand Lodge",
        description: "You resist attempts to dissuade you from obeying the Decemvirate’s will. You gain a +1 trait bonus on saving throws against enchantment spells and spelllike abilities."
    },
    {
        name: "Observant",
        type: "Faction",
        subtype: "Grand Lodge",
        description: "Sometimes it helps to pay attention to your surroundings and the people you meet. Choose either Perception or Sense Motive. You gain a +1 trait bonus on all checks for the chosen skill, and the chosen skill becomes a class skill for you."
    },
    {
        name: "Proper Training",
        type: "Faction",
        subtype: "Grand Lodge",
        description: "Your time at the Grand Lodge of Absalom has served you well. Choose either Knowledge (geography) or Knowledge (history). You gain a +1 trait bonus on all checks for the chosen skill, and the chosen skill becomes a class skill for you."
    },
    {
        name: "Teaching Mistake",
        type: "Faction",
        subtype: "Grand Lodge",
        description: "You know the consequences of failure and strive never to make the same mistake twice. Once per scenario, when you roll a natural 1 on any saving throw, you gain a +1 trait bonus on your next saving throw, which must be used before the end of the scenario."
    },
    {
        name: "Captain’s Blade",
        type: "Faction",
        subtype: "Liberty’s Edge",
        description: "You were born on board a ship and learned to fight beside the sailing men and women of the Andoran fleet. While on board any vessel afloat on water, you gain a +1 trait bonus on Acrobatics and Climb checks. One of these skills (your choice) becomes a class skill for you."
    },
    {
        name: "Freedom Fighter",
        type: "Faction",
        subtype: "Liberty’s Edge",
        description: "Your family has long waged war against tyranny, and you learned a great deal about guerilla warfare in your youth. You gain a +1 trait bonus on Stealth checks and a +1 trait bonus on attack rolls made during the surprise round."
    },
    {
        name: "Indomitable",
        type: "Faction",
        subtype: "Liberty’s Edge",
        description: "Your strong, self-reliant swagger has made you more resistant to domination and control. You gain a +1 trait bonus on saving throws versus enchantment spells and effects."
    },
    {
        name: "Rousing Oratory",
        type: "Faction",
        subtype: "Liberty’s Edge",
        description: "You are particularly adept at expressing your beliefs in a way that resonates with others. Perform (act, comedy, oratory, or sing) becomes a class skill for you. Once per day you can spend 1 minute addressing and inspiring your allies within 60 feet, after which you can attempt a DC 15 Perform (act, comedy, oratory, or sing) check. If you succeed, your allies gain a +1 trait bonus on saving throws against fear effects for 5 minutes. If you exceed the check DC by 10 or more, increase the bonus by 1."
    },
    {
        name: "Whistleblower",
        type: "Faction",
        subtype: "Liberty’s Edge",
        description: "You are wise to the schemes of liars, thieves, and cheats, granting you a +1 bonus on Sense Motive checks, and that skill becomes a class skill for you."
    },
    {
        name: "Attuned to the Ancestors",
        type: "Faction",
        subtype: "Scarab Sages",
        description: "You were raised to believe that undead are nothing to fear—they are simply the unliving remnants of your honored ancestors. Once per day, you can surround yourself with an aura of unlife. Unintelligent undead ignore you unless you take action against them, per hide from undead. The protection lasts 1 round for every two character levels you possess (with a minimum of 1 round). If you take any offensive action against any undead, this effect immediately ends. This is a supernatural ability."
    },
    {
        name: "Ancient Historian",
        type: "Faction",
        subtype: "Scarab Sages",
        description: "You are well acquainted with the lore of fallen empires. Choose either Knowledge (history) or Linguistics. That skill becomes a class skill for you, and you begin play able to speak and read one of the following languages: Ancient Osiriani, Azlanti, Cyclops, Jistkan, Tekritanin, or Thassilonian."
    },
    {
        name: "Reverent Wielder",
        type: "Faction",
        subtype: "Scarab Sages",
        description: "Some of the most powerful weapons are priceless and ancient, and you are vigilant in protecting your equipment as much as you protect yourself. You gain a +1 trait bonus to CMD against disarm, steal, and sunder combat maneuvers, and your equipment gains a +1 trait bonus on all saving throws."
    },
    {
        name: "Secrets of the Sphinx",
        type: "Faction",
        subtype: "Scarab Sages",
        description: "Your ancestors paid the proper obeisance to Nethys, who granted their heirs special divinatory gifts. Once per day, you may gain a +2 trait bonus on any single Knowledge check. Additionally, choose one Knowledge skill—this skill becomes a class skill for you."
    },
    {
        name: "Tomb Raider",
        type: "Faction",
        subtype: "Scarab Sages",
        description: "You’ve spent most of your life exploring the ancient tombs and catacombs of Osirion. You gain a +1 bonus on Perception and Knowledge (dungeoneering) checks, and one of these skills (your choice) becomes a class skill for you."
    },
    {
        name: "A Sure Thing",
        type: "Faction",
        subtype: "Silver Crusade",
        description: "Once per day, you gain a +2 bonus on a single attack roll against an evil-aligned creature. If the creature is not evil-aligned, this ability is wasted with no benefit."
    },
    {
        name: "Beneficent Touch",
        type: "Faction",
        subtype: "Silver Crusade",
        description: "Once per day, when you cast a spell or use a class ability that heals hit point damage, reroll any 1s that appear on the dice and take the new roll (even if it is another 1)."
    },
    {
        name: "Comparative Religion",
        type: "Faction",
        subtype: "Silver Crusade",
        description: "Your allies within the Silver Crusade have taught you a lot about Golarion’s deities and their followers. You gain a +1 trait bonus on Knowledge (religion) checks, and Knowledge (religion) becomes a class skill for you."
    },
    {
        name: "Force for Good",
        type: "Faction",
        subtype: "Silver Crusade",
        description: "Your good-aligned spells are especially powerful, and they function at +1 caster level. This trait makes your aura more powerful (one step higher), as outlined in the detect evil spell."
    },
    {
        name: "Unorthodox Strategy",
        type: "Faction",
        subtype: "Silver Crusade",
        description: "You are particularly quick on your feet, and gain a +2 trait bonus on Acrobatics checks made to move through an enemy’s threatened squares."
    },
    {
        name: "Expert Duelist",
        type: "Faction",
        subtype: "Sovereign Court",
        description: "In your youth, you spent countless hours perfecting the art of the duel, focusing your efforts on defeating a single foe. You gain a +1 trait bonus to your Armor Class so long as you are adjacent to a single foe. This trait bonus is not applied to your Armor Class for touch attacks or when you are denied your Dexterity bonus."
    },
    {
        name: "Fashionable",
        type: "Faction",
        subtype: "Sovereign Court",
        description: "You spent your formative years as a young blade in Oppara and learned the ins and outs of using fashion to improve your relations with others. So long as you are wearing clothing and jewelry worth more than 80 gp, you gain a +1 trait bonus on Bluff, Diplomacy, and Sense Motive checks. One of these skills (your choice) becomes a class skill for you."
    },
    {
        name: "Impressive Presence",
        type: "Faction",
        subtype: "Sovereign Court",
        description: "Your grandiose posturing often makes it difficult for anyone to concentrate around you. Once per day as a full-round action, you may attempt to distract adjacent foes with a lengthy display of your martial prowess. All adjacent foes must succeed at a Will save (DC 10 + 1/2 your level + your Charisma modifier) or gain the shaken condition. This condition persists for 1 round."
    },
    {
        name: "Influential",
        type: "Faction",
        subtype: "Sovereign Court",
        description: "When you make a suggestion, strangers often assume that it was their idea to begin with. You gain a +3 bonus on Diplomacy checks to make requests of a creature. Once per day, you may select one single spell you are casting with the language dependent descriptor; you increase the saving throw DC of that spell by 1."
    },
    {
        name: "Unflappable",
        type: "Faction",
        subtype: "Sovereign Court",
        description: "Whether it is a result of your dedication to your work or just pure guts, nothing seems to shake you. You gain a +1 trait bonus on saves against fear, and the DC to demoralize you with Intimidate checks increases by 3. "
    }
];
