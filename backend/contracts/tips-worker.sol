// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

interface TipsRequester {

}

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";


contract TipsWorker is ERC721URIStorage, Ownable{

    uint256 constant PriceLimit = 1000000000000000;
    mapping(uint256 => address) public push_number;
    mapping(uint256 => uint256) public token_price;


    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event TokenURIChanged(address indexed sender, uint256 indexed tokenId, string uri);

    constructor() ERC721("TipsWorker", "TPK") {}



    modifier LimitPrice(uint256 quatity){
        require(quatity >= PriceLimit,"not enough eth");
        _;
    }

    modifier chackowner(uint256 id, address user){
        require(push_number[id] == user,"not enough eth");
        _;
    }


    function nftMint(string memory name, string memory text, uint256 timelimit, uint256 quantity ) 
    payable
    public
    LimitPrice(quantity)
    {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        bytes memory metaData = abi.encodePacked(
            '{"name":"',
            name,
            ' #',
            Strings.toString(newTokenId),
            '", "description": "',
            text,
            '",',
            '"attributes": [',
            '{"trait_type": "timestamp",',
            '"value":',
            Strings.toString(timelimit),
            '}, {'
            '"trait_type": "price",',
            '"value":',
            Strings.toString(quantity),
            '}]'
            '}'
        );

        string memory uri = string(abi.encodePacked("data:application/json;base64,",Base64.encode(metaData)));

        _mint(_msgSender(), newTokenId);

        _setTokenURI(newTokenId, uri);

        push_number[newTokenId] = _msgSender();
        token_price[newTokenId] = quantity;

        emit TokenURIChanged(_msgSender(), newTokenId, uri);
    }


    function withdraw(uint256 id, address worker)
    public
    payable
    chackowner(id, _msgSender())
    {
        (bool success, ) = payable(worker).call{value: token_price[id]}(
            ""
        );
        require(success);
    }
}
