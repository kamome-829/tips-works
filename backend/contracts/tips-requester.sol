// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract tipsrequester is ERC721URIStorage, Ownable{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event TokenURIChanged(address indexed sender, uint256 indexed tokenId, string uri);

    constructor() ERC721("tipsrequester", "TPR") {
    }


    function nftMint(string memory url, string memory text)
    public
    {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        bytes memory metaData = abi.encodePacked(
            '{"url":"',
            url,
            '",',
            ' "description": "',
            text,
            '",',
            '"timestamp": "',
            block.timestamp,
            '"}'
        );

        string memory uri = string(abi.encodePacked("data:application/json;base64,",Base64.encode(metaData)));

        _mint(_msgSender(), newTokenId);

        _setTokenURI(newTokenId, uri);

        emit TokenURIChanged(_msgSender(), newTokenId, uri);
    }

}