using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Message
    {
        public int Id {get;set;}

        public string SenderUsername {get;set;}
        public AppUser Sender {get;set;}
        public int RecipientId {get;set;}
        
        public string RecipientUsername {get;set;}
        public AppUser Recipient {get;set;}

        public string Content {get;set;}
        public DateTime? DateRead {get;set;}
        public DateTime MessageSent {get;set;}= DateTime.Now;
        public bool SenderDelete{get;set;}
        public bool RecipientDelete{get;set;}
    
    }
}